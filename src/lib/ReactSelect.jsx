import Select, { defaultTheme } from "react-select";
import { styled, Button } from "@mui/material";
import { useEffect, useState } from "react";
const { colors } = defaultTheme;
const SelectWrapper = styled("div")({
  "& input:focus": {
    boxShadow: "none",
  },
});

const Menu = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div
      {...props}
      style={{
        minWidth: "300px",
        right: 0,
        zIndex: 1000,
      }}
      className="bg-white rounded shadow mt-2 w-100 position-absolute z-20"
    />
  );
};

const selectStyles = {
  control: (provided) => ({
    ...provided,
    minWidth: 0,
    margin: 8,
  }),
  menu: () => ({ boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.3)" }),
};

const Blanket = (props) => (
  <div
    {...props}
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 999,
    }}
    className="position-fixed"
  />
);
const Dropdown = ({ children, isOpen, target, onClose, className }) => (
  <div className={`${className} position-relative`}>
    {target}
    {isOpen ? <Blanket onClick={onClose} /> : null}
    {isOpen ? <Menu>{children}</Menu> : null}
  </div>
);
const Svg = (p) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
);
const DropdownIndicator = () => (
  <div className="h-6 w-8">
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill={colors.neutral0}
        fillRule="evenodd"
      />
    </Svg>
  </div>
);

function ReactSelect({
  options,
  onChange,
  value,
  placeholder,
  type,
  Target,
  dropdownClassName,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const toggleOpen = () => setOpen(!open);
  const onSelectChange = (newValue) => {
    handleOpen();
    if (newValue && newValue !== value) onChange(newValue);
  };
  useEffect(() => {
    if (value) {
      handleClose();
    }
  }, [value]);
  return (
    <Dropdown
      isOpen={open}
      onClose={handleClose}
      className={dropdownClassName}
      target={
        Target ? (
          <Target onClick={toggleOpen}></Target>
        ) : (
          <Button className="px-3 w-100" onClick={toggleOpen}>
            {value?.short}
          </Button>
        )
      }
    >
      <SelectWrapper>
        <Select
          autoFocus
          backspaceRemovesValue={false}
          onChange={onSelectChange}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          isClearable={false}
          menuIsOpen
          options={options}
          getOptionLabel={(option) => (
            <>
              <span className={`currency-flag ${option.flag} me-1`} />
              <span className="text">
                &nbsp;{option.short}&nbsp;
                <small className="text-muted">{option.long}</small>
              </span>
            </>
          )}
          placeholder="Search..."
          className="w-100 text-start"
          getOptionValue={(option) => option.short}
          isOptionSelected={(option) => option.short === value?.short}
          styles={selectStyles}
          tabSelectsValue={false}
        />
      </SelectWrapper>
    </Dropdown>
  );
}

ReactSelect.defaultProps = {
  options: [],
  onChange: () => {},
  value: null,
  placeholder: "",
  type: "other",
};

export default ReactSelect;

import React from "react";
import { LargeContainer, SmallContainer } from "../../utils/FormContainers";
import GroundWrapper from "../../utils/GroundWrapper";
import { FaSearch } from "react-icons/fa";
import { ReactComponent as FilterIcon } from "../../assets/images/filter-icon.svg";
import { useNavigate } from "react-router-dom";

const TableRow = () => (
  <tr>
    <td>20,000 Piece</td>
    <td>
      <div className="w-100 d-flex align-items-center">
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#FFD66B",
          }}
        ></div>
        <div className="ml-2">MARK Bluetooth</div>
      </div>
    </td>
    <td>
      <b>$16</b>
    </td>
    <td>34,666 Piece</td>
    <td>
      <button className="send-btn w-auto px-3 py-2">Choose</button>
    </td>
  </tr>
);

const BeneficiaryDetails = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../summary");
  };
  return (
    <GroundWrapper>
      <div className="container-fluid py-5 mt-5">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <LargeContainer style={{ overflowX: "auto" }}>
              <div style={{ minWidth: 700 }}>
                <div className="d-flex align-items-center">
                  <h1 style={{ fontSize: 18 }}>Top Selling Products</h1>
                  <div className="ml-5 d-flex align-items-center">
                    <div className="input-info d-flex align-items-center">
                      <FaSearch />
                      <input
                        type="text"
                        className="bg-transparent border-0 w-100 px-3"
                        placeholder="Search"
                      />
                    </div>
                    <div className="ml-3">
                      <button
                        type="button"
                        className="btn px-3 btn-outline-secondary rounded-pill"
                      >
                        City
                      </button>
                    </div>
                    <div className="ml-3">
                      <button
                        type="button"
                        className="btn px-3 btn-outline-secondary rounded-pill"
                      >
                        Country
                      </button>
                    </div>
                    <div className="ml-5">
                      <button
                        type="button"
                        className="btn py-2 px-3 btn-outline-secondary rounded"
                      >
                        <FilterIcon className="filter-icon" />
                      </button>
                    </div>
                  </div>
                </div>
                <table className="table text-caption table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Beneficiary ID</th>
                      <th scope="col">Beneficiaries</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total Order</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                  </tbody>
                </table>
              </div>
            </LargeContainer>
          </div>
          <div className="col-lg-4">
            <SmallContainer>
              <div className="headings text-center mb-4">
                <h1 className="text-lg pb-2 font-weight-bold">
                  New Beneficiary details
                </h1>
              </div>
              <form action="/" onSubmit={handleSubmit}>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">First name</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Sweden"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Last name</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Address (Optional)</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">City</label>
                  <select className="input-info custom-select" type="text">
                    <option value="">City</option>
                    <option value="paric">Paris</option>
                  </select>
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Mobile number</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">
                    Purpose of Sending the fund
                  </label>
                  <select className="input-info custom-select">
                    <option value="">Familiy Support</option>
                    <option value="paric">Educational Purposes</option>
                    <option value="">Medical Purposes</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className="send-btn w-100 mt-5">
                    Next
                  </button>
                </div>
              </form>
            </SmallContainer>
          </div>
        </div>
      </div>
    </GroundWrapper>
  );
};

export default BeneficiaryDetails;

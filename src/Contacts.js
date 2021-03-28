import React from "react";

function Contacts() {
  return (
    <div>
      <section
        id="mainactionbar"
        className="header-secondary page-actions container-fluid"
      >
        <div className="page-actions__left page-actions__holder contacts-action__holder">
          <span id="selectallholder" className="pull-left">
            <div
              id="ember6033"
              className="top-navigation-checkbox input __ui-form__custom-checkbox custom-checkbox ember-view"
            >
              <input
                data-test-checkbox="ticket-contact-selectall"
                id="contact-selectall"
                className="trigger-shortcuts ember-checkbox ember-view"
                type="checkbox"
              />
              <label htmlFor="contact-selectall">
                <span title="Select all" className="label-field">
                  Select all
                </span>
              </label>
            </div>
          </span>
          <div
            id="ember6034"
            className="__app-components__inline-search ember-view"
          >
            <div className="contact-search">
              <form role="search">
                <div id="ember6035" className="ember-basic-dropdown ember-view">
                  <div
                    data-test-id="contact-in-search"
                    aria-owns="ember-basic-dropdown-content-ember6035"
                    tabIndex="0"
                    data-ebd-id="ember6035-trigger"
                    role="search"
                    id="ember6036"
                    className="contact-search-dropdown trigger-shortcuts ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view"
                  >
                    <div className="contact-search-holder input">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="app-icon app-icon--dark app-icon--small"
                      >
                        <path
                          fill="#183247"
                          d="M11.015 11.95c-2.641 2.17-6.557 2.013-9.033-.464-2.635-2.635-2.644-6.898-.019-9.523s6.888-2.616 9.523.019c2.477 2.476 2.633 6.392.464 9.033l3.855 3.855c.26.26.26.679.002.937a.662.662 0 01-.937-.002l-3.855-3.855zM2.902 2.902C.793 5.01.8 8.435 2.917 10.552c2.116 2.116 5.541 2.123 7.65.015 2.108-2.109 2.101-5.534-.015-7.65C8.435.8 5.01.793 2.902 2.902z"
                        ></path>
                      </svg>
                      <input
                        data-test-id="contact-search-input"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-autocomplete="list"
                        aria-owns="contact-search-list"
                        aria-activedescendant="no-contacts-found"
                        role="combobox"
                        aria-role="combobox"
                        tabIndex="0"
                        aria-label="Search all contacts"
                        placeholder="Search all contacts"
                        id="ember6037"
                        className="contact-search-input trigger-shortcuts ember-text-field ember-view"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    id="ember-basic-dropdown-content-ember6035"
                    className="ember-basic-dropdown-content-placeholder"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="page-actions__right">
          <div className="pull-right">
            <span className="text__content">
              <button
                data-toggle="dropdown"
                data-test-id="contact-export-link"
                className="app-icon-btn app-icon-btn--text"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  className="app-icon"
                >
                  <path
                    fill="#183247"
                    d="M32.395 13.222v28.84A2.403 2.403 0 0130 44.472a2.403 2.403 0 01-2.395-2.41v-28.84l-7.887 7.925a2.385 2.385 0 01-3.387-.003 2.422 2.422 0 01.003-3.41l11.974-12.03a2.384 2.384 0 013.384 0l11.974 12.03c.936.941.938 2.467.003 3.41a2.384 2.384 0 01-3.387.003l-7.887-7.925zM10.27 7.818a2.384 2.384 0 013.387.012c.932.945.927 2.47-.012 3.409A23.355 23.355 0 006.79 27.817c0 12.902 10.39 23.362 23.21 23.362s23.21-10.46 23.21-23.362c0-6.293-2.48-12.185-6.82-16.541a2.422 2.422 0 01-.003-3.409 2.384 2.384 0 013.386-.004A28.19 28.19 0 0158 27.817C58 43.382 45.464 56 30 56S2 43.382 2 27.817a28.19 28.19 0 018.271-20z"
                  ></path>
                </svg>
                Export
              </button>
              <span
                id="ember6039"
                className="import-progress-container ember-view"
              >
                <div id="ember6041" className="ember-basic-dropdown ember-view">
                  <div
                    aria-owns="ember-basic-dropdown-content-ember6041"
                    tabIndex="0"
                    data-ebd-id="ember6041-trigger"
                    role="button"
                    id="ember6042"
                    className="ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view"
                  >
                    <button
                      data-toggle="dropdown"
                      data-test-id="contact-import-link"
                      className="app-icon-btn app-icon-btn--text"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        className="app-icon"
                      >
                        <path d="M27.605 36.25V7.41A2.403 2.403 0 0130 5a2.403 2.403 0 012.395 2.41v28.84l7.887-7.925a2.384 2.384 0 013.387.004 2.422 2.422 0 01-.003 3.409l-11.974 12.03a2.385 2.385 0 01-3.384 0l-11.974-12.03a2.422 2.422 0 01-.003-3.41 2.384 2.384 0 013.387-.003l7.887 7.925zM10.271 7.818a2.384 2.384 0 013.387.012c.932.945.927 2.47-.012 3.409A23.355 23.355 0 006.79 27.817c0 12.902 10.39 23.362 23.21 23.362s23.21-10.46 23.21-23.362c0-6.293-2.48-12.185-6.82-16.541a2.422 2.422 0 01-.003-3.409 2.384 2.384 0 013.386-.004A28.19 28.19 0 0158 27.817C58 43.382 45.464 56 30 56S2 43.382 2 27.817a28.19 28.19 0 018.271-20z"></path>
                      </svg>
                      Import
                    </button>
                  </div>
                </div>
              </span>
            </span>
            <div
              id="ember6043"
              className="fresh-pagination __ui-components__fresh-pagination ember-view"
            >
              <span
                className="text__content muted ml-10 mr-5"
                data-test-pagination="pagination-details"
              >
                <span data-test-id="pagination-details">1 - 17 of 17</span>
              </span>
              <button
                className="cursor-pointer app-icon-btn app-pagination-left app-icon-btn--oval-left"
                disabled=""
                aria-label="Previous ( Alt+left )"
                data-test-id="previous-btn"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="app-icon app-icon--small"
                >
                  <path d="M22.789 8.626c.903-.875.903-2.294.001-3.17s-2.366-.876-3.268-.001l-9.244 8.959a2.195 2.195 0 000 3.171l9.244 8.959c.903.875 2.366.874 3.268-.001s.902-2.295-.001-3.169L15.18 16l7.609-7.374z"></path>
                </svg>
              </button>
              <button
                className="cursor-pointer app-icon-btn app-pagination-right app-icon-btn--oval-right"
                disabled=""
                aria-label="Next ( Alt+right )"
                data-test-id="next-btn"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="app-icon app-icon--small"
                >
                  <path d="M10.277 8.626c-.903-.875-.903-2.294-.001-3.17s2.366-.876 3.268-.001l9.244 8.959a2.195 2.195 0 010 3.171l-9.244 8.959c-.903.875-2.366.874-3.268-.001s-.902-2.295.001-3.169L17.886 16l-7.609-7.374z"></path>
                </svg>
              </button>
            </div>
            <button
              data-test-link="filter-view"
              aria-label="Hide filters"
              className="app-icon-btn hint--rounded hint--bottom-left app-icon-btn--active"
            >
              <span className="sidebar-expanded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="app-icon app-icon--small icon-detail-right"
                >
                  <path d="M20.038 4.29H4.895a.606.606 0 00-.606.606v22.21c0 .335.271.606.606.606h15.143V4.291zm2.423 0v23.421h4.644a.606.606 0 00.606-.606V4.895a.606.606 0 00-.606-.606h-4.644zM4.895 1.867h22.21a3.029 3.029 0 013.029 3.029v22.21a3.029 3.029 0 01-3.029 3.029H4.895a3.029 3.029 0 01-3.029-3.029V4.896a3.029 3.029 0 013.029-3.029zM13.479 16l-4.191-4.191a1.211 1.211 0 011.713-1.713l5.048 5.048c.473.473.473 1.24 0 1.713l-5.048 5.048a1.211 1.211 0 01-1.713-1.713l4.191-4.191z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <div id="ember6016" className="fixed-header ember-view">
        <div
          id="ember6017"
          className="__page-layout__page-wrapper sidebar-present ember-view"
        >
          <div
            id="ember6018"
            className="contacts-table customer-table page-content ember-view"
          >
            <div className="responsive">
              <div
                id="ember6029"
                className="__marketplace-list ember-view"
              ></div>
              <div id="ember6632" className="ember-view">
                <div id="ember6633" className="ember-view">
                  <div id="ember6634" className="ember-view"></div>
                </div>

                <div id="ember6639" className="ember-view">
                  <div id="ember6641" className="ember-view"></div>
                  <div
                    id="ember-basic-dropdown-content-ember6640"
                    className="ember-basic-dropdown-content-placeholder"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </div>

              <div id="ember6032" className="ember-view"></div>

              <div id="ember6045" className="ember-view">
                <div id="ember6046" className="dataloaded ember-view">
                  <div id="ember6047" className="fresh-table ember-view">
                    <table id="ember6048" className="list ember-view">
                      <thead id="ember6049" className="ember-view">
                        <tr id="ember6050" className="ember-view">
                          <th
                            style={{ width: "4%" }}
                            id="ember6052"
                            className="ember-view"
                          >
                            &nbsp;
                          </th>
                          <th
                            style={{ width: "16%" }}
                            id="ember6054"
                            className="ember-view"
                          >
                            <div
                              data-test-id="header-Contact"
                              title="Contact"
                              id="ember6055"
                              className="ellipsis ember-view"
                            >
                              <span> Contact </span>
                            </div>
                          </th>
                          <th
                            style={{ width: "13%" }}
                            id="ember6057"
                            className="ember-view"
                          >
                            <div
                              data-test-id="header-Title"
                              title="Title"
                              id="ember6058"
                              className="ellipsis ember-view"
                            >
                              <span> Title </span>
                            </div>
                          </th>
                          <th
                            style={{ width: "12%" }}
                            id="ember6060"
                            className="ember-view"
                          >
                            <div
                              data-test-id="header-Company"
                              title="Company"
                              id="ember6061"
                              className="ellipsis ember-view"
                            >
                              <span> Company </span>
                            </div>
                          </th>
                          <th
                            style={{ width: "16%" }}
                            id="ember6063"
                            className="ember-view"
                          >
                            <div
                              data-test-id="header-Email address"
                              title="Email address"
                              id="ember6064"
                              className="ellipsis ember-view"
                            >
                              <span> Email address </span>
                            </div>
                          </th>
                          <th
                            style={{ width: "12%" }}
                            id="ember6066"
                            className="ember-view"
                          >
                            <div
                              data-test-id="header-Work phone"
                              title="Work phone"
                              id="ember6067"
                              className="ellipsis ember-view"
                            >
                              <span> Work phone </span>
                            </div>
                          </th>
                          <th
                            style={{ width: "10%" }}
                            id="ember6069"
                            className="ember-view"
                          >
                            <div
                              data-test-id="header-Facebook"
                              title="Facebook"
                              id="ember6070"
                              className="ellipsis ember-view"
                            >
                              <span> Facebook </span>
                            </div>
                          </th>
                          <th
                            style={{ width: "12%" }}
                            id="ember6072"
                            className="ember-view"
                          >
                            <div
                              data-test-id="header-Twitter"
                              title="Twitter"
                              id="ember6073"
                              className="ellipsis ember-view"
                            >
                              <span> Twitter </span>
                            </div>
                          </th>
                          <th
                            style={{ width: "5%" }}
                            id="ember6075"
                            className="ember-view"
                          >
                            &nbsp;
                          </th>
                        </tr>
                      </thead>

                      <tbody
                        id="ember6076"
                        className="table-has-content ember-view"
                      >
                        <tr
                          id="ember6077"
                          className="body-row current__item--active ember-view"
                        >
                          <td
                            style={{ width: "4%" }}
                            id="ember6079"
                            className="ember-view"
                          >
                            <div id="ember6080" className="ember-view">
                              <span
                                id="ember6081"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6082" className="ember-view">
                                  <div
                                    id="ember6083"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114318"
                                      id="82014114318"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114318">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6085"
                            className="ember-view"
                          >
                            <div
                              id="ember6086"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114318"
                                  id="ember6087"
                                  className="ember-view"
                                >
                                  <div id="ember6088" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6090"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6091"
                                            className="avatar-block avatar__initial avatar__initial--4 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              A
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Anne Richard"
                                      >
                                        Anne Richard
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6093"
                            className="ember-view"
                          >
                            <div
                              id="ember6094"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6096"
                            className="ember-view"
                          >
                            <div
                              id="ember6097"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6098" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6100"
                            className="ember-view"
                          >
                            <div
                              id="ember6101"
                              className="bcell-template ember-view"
                            >
                              <span>anne.richard1@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6103"
                            className="ember-view"
                          >
                            <div
                              id="ember6104"
                              className="bcell-template ember-view"
                            >
                              <a
                                rel="noopener"
                                className="default-color"
                                data-test-id="trigger-telephone"
                                href="tel:1 869 673 5678"
                              >
                                1 869 673 5678
                              </a>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6106"
                            className="ember-view"
                          >
                            <div
                              id="ember6107"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6109"
                            className="ember-view"
                          >
                            <div
                              id="ember6110"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6112"
                            className="ember-view"
                          >
                            <div
                              id="ember6113"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6115"
                                  tabIndex="0"
                                  data-ebd-id="ember6115-trigger"
                                  role="button"
                                  id="ember6116"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6115"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6118" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6119"
                            className="ember-view"
                          >
                            <div id="ember6120" className="ember-view">
                              <span
                                id="ember6121"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6122" className="ember-view">
                                  <div
                                    id="ember6123"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114225"
                                      id="82014114225"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114225">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6124"
                            className="ember-view"
                          >
                            <div
                              id="ember6125"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114225"
                                  id="ember6126"
                                  className="ember-view"
                                >
                                  <div id="ember6127" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6129"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6130"
                                            className="avatar-block avatar__initial avatar__initial--2 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              B
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Bob Tree"
                                      >
                                        Bob Tree
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6131"
                            className="ember-view"
                          >
                            <div
                              id="ember6132"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6133"
                            className="ember-view"
                          >
                            <div
                              id="ember6134"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6135" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6136"
                            className="ember-view"
                          >
                            <div
                              id="ember6137"
                              className="bcell-template ember-view"
                            >
                              <span>bob.tree@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6138"
                            className="ember-view"
                          >
                            <div
                              id="ember6139"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6140"
                            className="ember-view"
                          >
                            <div
                              id="ember6141"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6142"
                            className="ember-view"
                          >
                            <div
                              id="ember6143"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6144"
                            className="ember-view"
                          >
                            <div
                              id="ember6145"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6147"
                                  tabIndex="0"
                                  data-ebd-id="ember6147-trigger"
                                  role="button"
                                  id="ember6148"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6147"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6150" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6151"
                            className="ember-view"
                          >
                            <div id="ember6152" className="ember-view">
                              <span
                                id="ember6153"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6154" className="ember-view">
                                  <div
                                    id="ember6155"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114236"
                                      id="82014114236"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114236">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6156"
                            className="ember-view"
                          >
                            <div
                              id="ember6157"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114236"
                                  id="ember6158"
                                  className="ember-view"
                                >
                                  <div id="ember6159" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6161"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6162"
                                            className="avatar-block avatar__initial avatar__initial--7 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              C
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Clarice Boone"
                                      >
                                        Clarice Boone
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6163"
                            className="ember-view"
                          >
                            <div
                              id="ember6164"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6165"
                            className="ember-view"
                          >
                            <div
                              id="ember6166"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6167" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6168"
                            className="ember-view"
                          >
                            <div
                              id="ember6169"
                              className="bcell-template ember-view"
                            >
                              <span>clboone@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6170"
                            className="ember-view"
                          >
                            <div
                              id="ember6171"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6172"
                            className="ember-view"
                          >
                            <div
                              id="ember6173"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6174"
                            className="ember-view"
                          >
                            <div
                              id="ember6175"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6176"
                            className="ember-view"
                          >
                            <div
                              id="ember6177"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6179"
                                  tabIndex="0"
                                  data-ebd-id="ember6179-trigger"
                                  role="button"
                                  id="ember6180"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6179"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6182" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6183"
                            className="ember-view"
                          >
                            <div id="ember6184" className="ember-view">
                              <span
                                id="ember6185"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6186" className="ember-view">
                                  <div
                                    id="ember6187"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114235"
                                      id="82014114235"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114235">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6188"
                            className="ember-view"
                          >
                            <div
                              id="ember6189"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114235"
                                  id="ember6190"
                                  className="ember-view"
                                >
                                  <div id="ember6191" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6193"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6194"
                                            className="avatar-block avatar__initial avatar__initial--1 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              E
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Emily Dean"
                                      >
                                        Emily Dean
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6195"
                            className="ember-view"
                          >
                            <div
                              id="ember6196"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6197"
                            className="ember-view"
                          >
                            <div
                              id="ember6198"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6199" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6200"
                            className="ember-view"
                          >
                            <div
                              id="ember6201"
                              className="bcell-template ember-view"
                            >
                              <span>emily.dean@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6202"
                            className="ember-view"
                          >
                            <div
                              id="ember6203"
                              className="bcell-template ember-view"
                            >
                              <a
                                rel="noopener"
                                className="default-color"
                                data-test-id="trigger-telephone"
                                href="tel:(257)-715-491"
                              >
                                (257)-715-491
                              </a>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6204"
                            className="ember-view"
                          >
                            <div
                              id="ember6205"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6206"
                            className="ember-view"
                          >
                            <div
                              id="ember6207"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6208"
                            className="ember-view"
                          >
                            <div
                              id="ember6209"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6211"
                                  tabIndex="0"
                                  data-ebd-id="ember6211-trigger"
                                  role="button"
                                  id="ember6212"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6211"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6214" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6215"
                            className="ember-view"
                          >
                            <div id="ember6216" className="ember-view">
                              <span
                                id="ember6217"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6218" className="ember-view">
                                  <div
                                    id="ember6219"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114237"
                                      id="82014114237"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114237">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6220"
                            className="ember-view"
                          >
                            <div
                              id="ember6221"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114237"
                                  id="ember6222"
                                  className="ember-view"
                                >
                                  <div id="ember6223" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6225"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6226"
                                            className="avatar-block avatar__initial avatar__initial--5 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              F
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Finch Hoot"
                                      >
                                        Finch Hoot
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6227"
                            className="ember-view"
                          >
                            <div
                              id="ember6228"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6229"
                            className="ember-view"
                          >
                            <div
                              id="ember6230"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6231" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6232"
                            className="ember-view"
                          >
                            <div
                              id="ember6233"
                              className="bcell-template ember-view"
                            >
                              <span>finchhoot1@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6234"
                            className="ember-view"
                          >
                            <div
                              id="ember6235"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6236"
                            className="ember-view"
                          >
                            <div
                              id="ember6237"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6238"
                            className="ember-view"
                          >
                            <div
                              id="ember6239"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6240"
                            className="ember-view"
                          >
                            <div
                              id="ember6241"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6243"
                                  tabIndex="0"
                                  data-ebd-id="ember6243-trigger"
                                  role="button"
                                  id="ember6244"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6243"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6246" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6247"
                            className="ember-view"
                          >
                            <div id="ember6248" className="ember-view">
                              <span
                                id="ember6249"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6250" className="ember-view">
                                  <div
                                    id="ember6251"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114220"
                                      id="82014114220"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114220">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6252"
                            className="ember-view"
                          >
                            <div
                              id="ember6253"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114220"
                                  id="ember6254"
                                  className="ember-view"
                                >
                                  <div id="ember6255" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6257"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6258"
                                            className="avatar-block avatar__initial avatar__initial--7 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              J
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-James Dean"
                                      >
                                        James Dean
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6259"
                            className="ember-view"
                          >
                            <div
                              id="ember6260"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6261"
                            className="ember-view"
                          >
                            <div
                              id="ember6262"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6263" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6264"
                            className="ember-view"
                          >
                            <div
                              id="ember6265"
                              className="bcell-template ember-view"
                            >
                              <span>james@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6266"
                            className="ember-view"
                          >
                            <div
                              id="ember6267"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6268"
                            className="ember-view"
                          >
                            <div
                              id="ember6269"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6270"
                            className="ember-view"
                          >
                            <div
                              id="ember6271"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6272"
                            className="ember-view"
                          >
                            <div
                              id="ember6273"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6275"
                                  tabIndex="0"
                                  data-ebd-id="ember6275-trigger"
                                  role="button"
                                  id="ember6276"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6275"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6278" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6279"
                            className="ember-view"
                          >
                            <div id="ember6280" className="ember-view">
                              <span
                                id="ember6281"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6282" className="ember-view">
                                  <div
                                    id="ember6283"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114228"
                                      id="82014114228"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114228">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6284"
                            className="ember-view"
                          >
                            <div
                              id="ember6285"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114228"
                                  id="ember6286"
                                  className="ember-view"
                                >
                                  <div id="ember6287" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6289"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6290"
                                            className="avatar-block avatar__initial avatar__initial--3 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              J
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Joe Mathew"
                                      >
                                        Joe Mathew
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6291"
                            className="ember-view"
                          >
                            <div
                              id="ember6292"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6293"
                            className="ember-view"
                          >
                            <div
                              id="ember6294"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6295" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6296"
                            className="ember-view"
                          >
                            <div
                              id="ember6297"
                              className="bcell-template ember-view"
                            >
                              <span>joe.mathew@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6298"
                            className="ember-view"
                          >
                            <div
                              id="ember6299"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6300"
                            className="ember-view"
                          >
                            <div
                              id="ember6301"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6302"
                            className="ember-view"
                          >
                            <div
                              id="ember6303"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6304"
                            className="ember-view"
                          >
                            <div
                              id="ember6305"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6307"
                                  tabIndex="0"
                                  data-ebd-id="ember6307-trigger"
                                  role="button"
                                  id="ember6308"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6307"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6310" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6311"
                            className="ember-view"
                          >
                            <div id="ember6312" className="ember-view">
                              <span
                                id="ember6313"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6314" className="ember-view">
                                  <div
                                    id="ember6315"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114227"
                                      id="82014114227"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114227">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6316"
                            className="ember-view"
                          >
                            <div
                              id="ember6317"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114227"
                                  id="ember6318"
                                  className="ember-view"
                                >
                                  <div id="ember6319" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6321"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6322"
                                            className="avatar-block avatar__initial avatar__initial--4 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              J
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-John"
                                      >
                                        John
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6323"
                            className="ember-view"
                          >
                            <div
                              id="ember6324"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6325"
                            className="ember-view"
                          >
                            <div
                              id="ember6326"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6327" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6328"
                            className="ember-view"
                          >
                            <div
                              id="ember6329"
                              className="bcell-template ember-view"
                            >
                              <span>john@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6330"
                            className="ember-view"
                          >
                            <div
                              id="ember6331"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6332"
                            className="ember-view"
                          >
                            <div
                              id="ember6333"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6334"
                            className="ember-view"
                          >
                            <div
                              id="ember6335"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6336"
                            className="ember-view"
                          >
                            <div
                              id="ember6337"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6339"
                                  tabIndex="0"
                                  data-ebd-id="ember6339-trigger"
                                  role="button"
                                  id="ember6340"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6339"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6342" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6343"
                            className="ember-view"
                          >
                            <div id="ember6344" className="ember-view">
                              <span
                                id="ember6345"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6346" className="ember-view">
                                  <div
                                    id="ember6347"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114231"
                                      id="82014114231"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114231">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6348"
                            className="ember-view"
                          >
                            <div
                              id="ember6349"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114231"
                                  id="ember6350"
                                  className="ember-view"
                                >
                                  <div id="ember6351" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6353"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6354"
                                            className="avatar-block avatar__initial avatar__initial--8 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              J
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Johnny Appleseed"
                                      >
                                        Johnny Appleseed
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6355"
                            className="ember-view"
                          >
                            <div
                              id="ember6356"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6357"
                            className="ember-view"
                          >
                            <div
                              id="ember6358"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6359" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6360"
                            className="ember-view"
                          >
                            <div
                              id="ember6361"
                              className="bcell-template ember-view"
                            >
                              <span>johnny.appleseed@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6362"
                            className="ember-view"
                          >
                            <div
                              id="ember6363"
                              className="bcell-template ember-view"
                            >
                              <a
                                rel="noopener"
                                className="default-color"
                                data-test-id="trigger-telephone"
                                href="tel:(123)-412-834"
                              >
                                (123)-412-834
                              </a>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6364"
                            className="ember-view"
                          >
                            <div
                              id="ember6365"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6366"
                            className="ember-view"
                          >
                            <div
                              id="ember6367"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6368"
                            className="ember-view"
                          >
                            <div
                              id="ember6369"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6371"
                                  tabIndex="0"
                                  data-ebd-id="ember6371-trigger"
                                  role="button"
                                  id="ember6372"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6371"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6374" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6375"
                            className="ember-view"
                          >
                            <div id="ember6376" className="ember-view">
                              <span
                                id="ember6377"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6378" className="ember-view">
                                  <div
                                    id="ember6379"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114233"
                                      id="82014114233"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114233">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6380"
                            className="ember-view"
                          >
                            <div
                              id="ember6381"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114233"
                                  id="ember6382"
                                  className="ember-view"
                                >
                                  <div id="ember6383" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6385"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6386"
                                            className="avatar-block avatar__initial avatar__initial--5 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              L
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Lewis Clarke"
                                      >
                                        Lewis Clarke
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6387"
                            className="ember-view"
                          >
                            <div
                              id="ember6388"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6389"
                            className="ember-view"
                          >
                            <div
                              id="ember6390"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6391" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6392"
                            className="ember-view"
                          >
                            <div
                              id="ember6393"
                              className="bcell-template ember-view"
                            >
                              <span>lewis.clarke@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6394"
                            className="ember-view"
                          >
                            <div
                              id="ember6395"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6396"
                            className="ember-view"
                          >
                            <div
                              id="ember6397"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6398"
                            className="ember-view"
                          >
                            <div
                              id="ember6399"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6400"
                            className="ember-view"
                          >
                            <div
                              id="ember6401"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6403"
                                  tabIndex="0"
                                  data-ebd-id="ember6403-trigger"
                                  role="button"
                                  id="ember6404"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6403"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6406" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6407"
                            className="ember-view"
                          >
                            <div id="ember6408" className="ember-view">
                              <span
                                id="ember6409"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6410" className="ember-view">
                                  <div
                                    id="ember6411"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114234"
                                      id="82014114234"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114234">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6412"
                            className="ember-view"
                          >
                            <div
                              id="ember6413"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114234"
                                  id="ember6414"
                                  className="ember-view"
                                >
                                  <div id="ember6415" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6417"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6418"
                                            className="avatar-block avatar__initial avatar__initial--3 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              M
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Maria Von Trapp"
                                      >
                                        Maria Von Trapp
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6419"
                            className="ember-view"
                          >
                            <div
                              id="ember6420"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6421"
                            className="ember-view"
                          >
                            <div
                              id="ember6422"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6423" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6424"
                            className="ember-view"
                          >
                            <div
                              id="ember6425"
                              className="bcell-template ember-view"
                            >
                              <span>soundofmusic@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6426"
                            className="ember-view"
                          >
                            <div
                              id="ember6427"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6428"
                            className="ember-view"
                          >
                            <div
                              id="ember6429"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6430"
                            className="ember-view"
                          >
                            <div
                              id="ember6431"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6432"
                            className="ember-view"
                          >
                            <div
                              id="ember6433"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6435"
                                  tabIndex="0"
                                  data-ebd-id="ember6435-trigger"
                                  role="button"
                                  id="ember6436"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6435"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6438" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6439"
                            className="ember-view"
                          >
                            <div id="ember6440" className="ember-view">
                              <span
                                id="ember6441"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6442" className="ember-view">
                                  <div
                                    id="ember6443"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114238"
                                      id="82014114238"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114238">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6444"
                            className="ember-view"
                          >
                            <div
                              id="ember6445"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114238"
                                  id="ember6446"
                                  className="ember-view"
                                >
                                  <div id="ember6447" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6449"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6450"
                                            className="avatar-block avatar__initial avatar__initial--3 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              M
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Mark Colbert"
                                      >
                                        Mark Colbert
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6451"
                            className="ember-view"
                          >
                            <div
                              id="ember6452"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6453"
                            className="ember-view"
                          >
                            <div
                              id="ember6454"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6455" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6456"
                            className="ember-view"
                          >
                            <div
                              id="ember6457"
                              className="bcell-template ember-view"
                            >
                              <span>mark.colbert@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6458"
                            className="ember-view"
                          >
                            <div
                              id="ember6459"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6460"
                            className="ember-view"
                          >
                            <div
                              id="ember6461"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6462"
                            className="ember-view"
                          >
                            <div
                              id="ember6463"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6464"
                            className="ember-view"
                          >
                            <div
                              id="ember6465"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6467"
                                  tabIndex="0"
                                  data-ebd-id="ember6467-trigger"
                                  role="button"
                                  id="ember6468"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6467"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6470" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6471"
                            className="ember-view"
                          >
                            <div id="ember6472" className="ember-view">
                              <span
                                id="ember6473"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6474" className="ember-view">
                                  <div
                                    id="ember6475"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114223"
                                      id="82014114223"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114223">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6476"
                            className="ember-view"
                          >
                            <div
                              id="ember6477"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114223"
                                  id="ember6478"
                                  className="ember-view"
                                >
                                  <div id="ember6479" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6481"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6482"
                                            className="avatar-block avatar__initial avatar__initial--1 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              M
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Matt Rogers"
                                      >
                                        Matt Rogers
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6483"
                            className="ember-view"
                          >
                            <div
                              id="ember6484"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6485"
                            className="ember-view"
                          >
                            <div
                              id="ember6486"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6487" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6488"
                            className="ember-view"
                          >
                            <div
                              id="ember6489"
                              className="bcell-template ember-view"
                            >
                              <span>matt.rogers@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6490"
                            className="ember-view"
                          >
                            <div
                              id="ember6491"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6492"
                            className="ember-view"
                          >
                            <div
                              id="ember6493"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6494"
                            className="ember-view"
                          >
                            <div
                              id="ember6495"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6496"
                            className="ember-view"
                          >
                            <div
                              id="ember6497"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6499"
                                  tabIndex="0"
                                  data-ebd-id="ember6499-trigger"
                                  role="button"
                                  id="ember6500"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6499"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6502" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6503"
                            className="ember-view"
                          >
                            <div id="ember6504" className="ember-view">
                              <span
                                id="ember6505"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6506" className="ember-view">
                                  <div
                                    id="ember6507"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114230"
                                      id="82014114230"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114230">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6508"
                            className="ember-view"
                          >
                            <div
                              id="ember6509"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114230"
                                  id="ember6510"
                                  className="ember-view"
                                >
                                  <div id="ember6511" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6513"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6514"
                                            className="avatar-block avatar__initial avatar__initial--6 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              P
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Phileas Fogg"
                                      >
                                        Phileas Fogg
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6515"
                            className="ember-view"
                          >
                            <div
                              id="ember6516"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6517"
                            className="ember-view"
                          >
                            <div
                              id="ember6518"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6519" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6520"
                            className="ember-view"
                          >
                            <div
                              id="ember6521"
                              className="bcell-template ember-view"
                            >
                              <span>aroundtheworld80@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6522"
                            className="ember-view"
                          >
                            <div
                              id="ember6523"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6524"
                            className="ember-view"
                          >
                            <div
                              id="ember6525"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6526"
                            className="ember-view"
                          >
                            <div
                              id="ember6527"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6528"
                            className="ember-view"
                          >
                            <div
                              id="ember6529"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6531"
                                  tabIndex="0"
                                  data-ebd-id="ember6531-trigger"
                                  role="button"
                                  id="ember6532"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6531"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6534" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6535"
                            className="ember-view"
                          >
                            <div id="ember6536" className="ember-view">
                              <span
                                id="ember6537"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6538" className="ember-view">
                                  <div
                                    id="ember6539"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114226"
                                      id="82014114226"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114226">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6540"
                            className="ember-view"
                          >
                            <div
                              id="ember6541"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114226"
                                  id="ember6542"
                                  className="ember-view"
                                >
                                  <div id="ember6543" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6545"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6546"
                                            className="avatar-block avatar__initial avatar__initial--3 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              P
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Polly"
                                      >
                                        Polly
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6547"
                            className="ember-view"
                          >
                            <div
                              id="ember6548"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6549"
                            className="ember-view"
                          >
                            <div
                              id="ember6550"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6551" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6552"
                            className="ember-view"
                          >
                            <div
                              id="ember6553"
                              className="bcell-template ember-view"
                            >
                              <span>polly@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6554"
                            className="ember-view"
                          >
                            <div
                              id="ember6555"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6556"
                            className="ember-view"
                          >
                            <div
                              id="ember6557"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6558"
                            className="ember-view"
                          >
                            <div
                              id="ember6559"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6560"
                            className="ember-view"
                          >
                            <div
                              id="ember6561"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6563"
                                  tabIndex="0"
                                  data-ebd-id="ember6563-trigger"
                                  role="button"
                                  id="ember6564"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6563"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6566" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6567"
                            className="ember-view"
                          >
                            <div id="ember6568" className="ember-view">
                              <span
                                id="ember6569"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6570" className="ember-view">
                                  <div
                                    id="ember6571"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114221"
                                      id="82014114221"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114221">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6572"
                            className="ember-view"
                          >
                            <div
                              id="ember6573"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114221"
                                  id="ember6574"
                                  className="ember-view"
                                >
                                  <div id="ember6575" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6577"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6578"
                                            className="avatar-block avatar__initial avatar__initial--4 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              R
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Rachel Doe"
                                      >
                                        Rachel Doe
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6579"
                            className="ember-view"
                          >
                            <div
                              id="ember6580"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6581"
                            className="ember-view"
                          >
                            <div
                              id="ember6582"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6583" className="ember-view">
                                Acme Inc.
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6584"
                            className="ember-view"
                          >
                            <div
                              id="ember6585"
                              className="bcell-template ember-view"
                            >
                              <span>rachel@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6586"
                            className="ember-view"
                          >
                            <div
                              id="ember6587"
                              className="bcell-template ember-view"
                            >
                              <a
                                rel="noopener"
                                className="default-color"
                                data-test-id="trigger-telephone"
                                href="tel:1 866 832 3090"
                              >
                                1 866 832 3090
                              </a>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6588"
                            className="ember-view"
                          >
                            <div
                              id="ember6589"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6590"
                            className="ember-view"
                          >
                            <div
                              id="ember6591"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6592"
                            className="ember-view"
                          >
                            <div
                              id="ember6593"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6595"
                                  tabIndex="0"
                                  data-ebd-id="ember6595-trigger"
                                  role="button"
                                  id="ember6596"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6595"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr id="ember6598" className="body-row ember-view">
                          <td
                            style={{ width: "4%" }}
                            id="ember6599"
                            className="ember-view"
                          >
                            <div id="ember6600" className="ember-view">
                              <span
                                id="ember6601"
                                className="__ui-components__gravity-loader ember-view"
                              >
                                <div id="ember6602" className="ember-view">
                                  <div
                                    id="ember6603"
                                    className="input __ui-form__custom-checkbox custom-checkbox ember-view"
                                  >
                                    <input
                                      data-test-checkbox="ticket-82014114229"
                                      id="82014114229"
                                      className="trigger-shortcuts ember-checkbox ember-view"
                                      type="checkbox"
                                    />
                                    <label htmlFor="82014114229">
                                      <span className="label-field"></span>
                                    </label>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6604"
                            className="ember-view"
                          >
                            <div
                              id="ember6605"
                              className="bcell-template ember-view"
                            >
                              <div
                                data-test-span="contact-list"
                                className="table-user-holder"
                              >
                                <a
                                  href="/a/contacts/82014114229"
                                  id="ember6606"
                                  className="ember-view"
                                >
                                  <div id="ember6607" className="ember-view">
                                    <div className="clearfix contact-avatar">
                                      <div className="pull-left">
                                        <figure
                                          data-test-id="avatar-icon"
                                          data-test-user-avatar=""
                                          id="ember6609"
                                          className="profilepic contacts__avatar avatar-icon avatar-icon--medium avatar-icon--circle ember-view"
                                        >
                                          <span
                                            data-test-avatar-text="profile_font_text"
                                            id="ember6610"
                                            className="avatar-block avatar__initial avatar__initial--2 ember-view"
                                          >
                                            <span className="avatar__initial--icon-wrapper">
                                              S
                                            </span>
                                          </span>

                                          <span
                                            aria-label="Unverified contacts"
                                            className="verify hint--rounded hint--right"
                                            data-test-id="not-verified"
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fillRule="evenodd"
                                              stroke-linejoin="round"
                                              stroke-miterlimit="1.414"
                                              clip-rule="evenodd"
                                              viewBox="0 0 60 60"
                                              className="app-icon app-icon--warning"
                                            >
                                              <path d="M30 .5C13.764.5.5 13.764.5 30S13.765 59.5 30 59.5c16.236 0 29.5-13.264 29.5-29.5S46.236.5 30 .5zm0 4.597c13.696 0 24.903 11.207 24.903 24.903 0 13.696-11.207 24.903-24.903 24.903C16.304 54.903 5.097 43.696 5.097 30 5.097 16.304 16.304 5.097 30 5.097zm2.586 28.567v-15.41c0-1.068-.254-1.875-.762-2.422-.508-.547-1.152-.82-1.933-.82-.782 0-1.416.28-1.905.84-.488.559-.732 1.36-.732 2.402v15.254c0 1.055.244 1.849.732 2.383.489.533 1.123.8 1.905.8.781 0 1.425-.267 1.933-.8.508-.534.762-1.276.762-2.227zm-2.617 5.387c-.795 0-1.488.257-2.08.771-.593.515-.889 1.234-.889 2.158 0 .821.286 1.511.859 2.071.573.56 1.276.84 2.11.84.82 0 1.51-.28 2.07-.84.56-.56.84-1.25.84-2.071 0-.911-.293-1.627-.879-2.148a2.965 2.965 0 00-2.031-.781z"></path>
                                            </svg>
                                          </span>
                                          <span className="profilepic__unverified">
                                            Unverified
                                          </span>
                                        </figure>
                                      </div>
                                      <div
                                        className="pl-10 pt-8 text--semibold table-subject"
                                        data-test-id="contact-name-Sam Kart"
                                      >
                                        Sam Kart
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "13%" }}
                            id="ember6611"
                            className="ember-view"
                          >
                            <div
                              id="ember6612"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6613"
                            className="ember-view"
                          >
                            <div
                              id="ember6614"
                              className="bcell-template ember-view"
                            >
                              <div id="ember6615" className="ember-view">
                                <span className="inactive">- -</span>
                              </div>
                            </div>
                          </td>
                          <td
                            style={{ width: "16%" }}
                            id="ember6616"
                            className="ember-view"
                          >
                            <div
                              id="ember6617"
                              className="bcell-template ember-view"
                            >
                              <span>sam.kart@freshdesk.com</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6618"
                            className="ember-view"
                          >
                            <div
                              id="ember6619"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "10%" }}
                            id="ember6620"
                            className="ember-view"
                          >
                            <div
                              id="ember6621"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "12%" }}
                            id="ember6622"
                            className="ember-view"
                          >
                            <div
                              id="ember6623"
                              className="bcell-template ember-view"
                            >
                              <span className="inactive">- -</span>
                            </div>
                          </td>
                          <td
                            style={{ width: "5%" }}
                            id="ember6624"
                            className="ember-view"
                          >
                            <div
                              id="ember6625"
                              className="bcell-template ember-view"
                            >
                              <div className="pull-right">
                                <div
                                  data-test-id="action-dropdown"
                                  aria-owns="ember-basic-dropdown-content-ember6627"
                                  tabIndex="0"
                                  data-ebd-id="ember6627-trigger"
                                  role="button"
                                  id="ember6628"
                                  className="ember-basic-dropdown-trigger ember-view"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    className="app-icon app-icon--large app-icon-btn--transparent app-icon-btn pt-0"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M30 20.5c-2.761 0-5-2.127-5-4.75S27.239 11 30 11s5 2.127 5 4.75-2.239 4.75-5 4.75zm0 14.25c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75-2.239 4.75-5 4.75zM30 49c-2.761 0-5-2.127-5-4.75s2.239-4.75 5-4.75 5 2.127 5 4.75S32.761 49 30 49z"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  id="ember-basic-dropdown-content-ember6627"
                                  className="ember-basic-dropdown-content-placeholder"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                id="ember6631"
                className="fresh-pagination __ui-components__fresh-pagination ember-view"
              >
                <button
                  className="cursor-pointer app-icon-btn app-pagination-left app-icon-btn--oval-left"
                  disabled=""
                  aria-label="Previous ( Alt+left )"
                  data-test-id="previous-btn"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="app-icon app-icon--small"
                  >
                    <path d="M22.789 8.626c.903-.875.903-2.294.001-3.17s-2.366-.876-3.268-.001l-9.244 8.959a2.195 2.195 0 000 3.171l9.244 8.959c.903.875 2.366.874 3.268-.001s.902-2.295-.001-3.169L15.18 16l7.609-7.374z"></path>
                  </svg>
                </button>
                <button
                  className="cursor-pointer app-icon-btn app-pagination-right app-icon-btn--oval-right"
                  disabled=""
                  aria-label="Next ( Alt+right )"
                  data-test-id="next-btn"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="app-icon app-icon--small"
                  >
                    <path d="M10.277 8.626c-.903-.875-.903-2.294-.001-3.17s2.366-.876 3.268-.001l9.244 8.959a2.195 2.195 0 010 3.171l-9.244 8.959c-.903.875-2.366.874-3.268-.001s-.902-2.295.001-3.169L17.886 16l-7.609-7.374z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <div
            id="ember6025"
            className="segment-sidebar page-sidebar ember-view"
          >
            <div className="sidebar">
              <div
                data-test-div="contact-filter-section"
                id="ember6644"
                className="scroll-wrap__right contact-filter filter-view scroll filter-list filter-list--fixed-footer ember-view"
              >
                <div
                  className="sidebar__title text--uppercase"
                  data-test-id="filter-title"
                >
                  FILTERS
                </div>

                <div
                  id="ember6645"
                  className="filter-items-container ember-view"
                >
                  <form id="ember6646" className="app-form ember-view">
                    <div id="ember6647" className="ember-view">
                      <occluded-content
                        className="occluded-content"
                        style={{ height: "0px" }}
                      ></occluded-content>
                      <div
                        data-test-item="Created"
                        data-test-id="filter-item"
                        id="ember6648"
                        className="filter-item ember-view"
                      >
                        <div
                          title="Created"
                          className="filter-field-title"
                          data-test-filter-label="Created"
                        >
                          Created
                        </div>

                        <div id="ember6649" className="ember-view">
                          <div
                            id="ember6650"
                            className="__ui-form__select-field ember-view"
                          >
                            <div
                              aria-activedescendant="-1"
                              aria-owns="ember-basic-dropdown-content-ember6652"
                              tabIndex="0"
                              data-ebd-id="ember6652-trigger"
                              role=""
                              id="ember6653"
                              className="ember-power-select-trigger ember-basic-dropdown-trigger ember-view"
                            >
                              <div
                                data-test-id="trigger-power-select"
                                id="ember6654"
                                className="ellipsis ember-view"
                              >
                                <span className="ember-power-select-selected-item">
                                  <span id="ember6685" className="ember-view">
                                    <span
                                      className="label"
                                      data-test-id="Any time"
                                    >
                                      Any time
                                    </span>
                                  </span>
                                </span>
                                <span className="ember-power-select-status-icon"></span>
                              </div>
                            </div>
                            <div
                              id="ember-basic-dropdown-content-ember6652"
                              className="ember-basic-dropdown-content-placeholder"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-test-item="Time zone"
                        data-test-id="filter-item"
                        id="ember6657"
                        className="filter-item ember-view"
                      >
                        <div
                          title="Time zone"
                          className="filter-field-title"
                          data-test-filter-label="Time zone"
                        >
                          Time zone
                        </div>

                        <div id="ember6658" className="ember-view">
                          <div
                            id="ember6659"
                            className="__ui-form__select-field ember-view"
                          >
                            <div
                              aria-activedescendant="-1"
                              aria-owns="ember-basic-dropdown-content-ember6662"
                              tabIndex="0"
                              data-ebd-id="ember6662-trigger"
                              role=""
                              id="ember6663"
                              className="ember-power-select-trigger ember-power-select-multiple-trigger ember-basic-dropdown-trigger ember-view"
                            >
                              <div
                                id="ember6664"
                                className="__ui-form__select-field__trigger__power-select-multiple ember-view"
                              >
                                <ul
                                  id="ember-power-select-multiple-options-ember6662"
                                  className="ember-power-select-multiple-options"
                                >
                                  <input
                                    className="ember-power-select-trigger-multiple-input"
                                    autocomplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    id="ember-power-select-trigger-multiple-input-ember6662"
                                    aria-controls="ember-power-select-options-ember6662"
                                    style={{ width: "100%" }}
                                    placeholder="Any"
                                    aria-activedescendant="-1"
                                    aria-label="Time zone combo box"
                                    data-test-id="trigger-power-select-multiple"
                                    type="search"
                                  />
                                </ul>

                                <span className="ember-power-select-status-icon"></span>
                              </div>
                            </div>
                            <div
                              id="ember-basic-dropdown-content-ember6662"
                              className="ember-basic-dropdown-content-placeholder"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-test-item="Tags"
                        data-test-id="filter-item"
                        id="ember6666"
                        className="filter-item ember-view"
                      >
                        <div
                          title="Tags"
                          className="filter-field-title"
                          data-test-filter-label="Tags"
                        >
                          Tags
                        </div>

                        <div id="ember6667" className="ember-view">
                          <div
                            id="ember6668"
                            className="__ui-form__select-field ember-view"
                          >
                            <div
                              aria-activedescendant="-1"
                              aria-owns="ember-basic-dropdown-content-ember6671"
                              tabIndex="0"
                              data-ebd-id="ember6671-trigger"
                              role=""
                              id="ember6672"
                              className="ember-power-select-trigger ember-power-select-multiple-trigger ember-basic-dropdown-trigger ember-view"
                            >
                              <div
                                id="ember6673"
                                className="__ui-form__select-field__trigger__power-select-multiple ember-view"
                              >
                                <ul
                                  id="ember-power-select-multiple-options-ember6671"
                                  className="ember-power-select-multiple-options"
                                >
                                  <input
                                    className="ember-power-select-trigger-multiple-input"
                                    autocomplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    id="ember-power-select-trigger-multiple-input-ember6671"
                                    aria-controls="ember-power-select-options-ember6671"
                                    style={{ width: "100%" }}
                                    placeholder="Any"
                                    aria-activedescendant="-1"
                                    aria-label="Tags combo box"
                                    data-test-id="trigger-power-select-multiple"
                                    type="search"
                                  />
                                </ul>

                                <span className="ember-power-select-status-icon"></span>
                              </div>
                            </div>
                            <div
                              id="ember-basic-dropdown-content-ember6671"
                              className="ember-basic-dropdown-content-placeholder"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-test-item="Companies"
                        data-test-id="filter-item"
                        id="ember6675"
                        className="filter-item ember-view"
                      >
                        <div
                          title="Companies"
                          className="filter-field-title"
                          data-test-filter-label="Companies"
                        >
                          Companies
                        </div>

                        <div id="ember6676" className="ember-view">
                          <div
                            id="ember6677"
                            className="__ui-form__select-field ember-view"
                          >
                            <div
                              aria-activedescendant="-1"
                              aria-owns="ember-basic-dropdown-content-ember6680"
                              tabIndex="0"
                              data-ebd-id="ember6680-trigger"
                              role=""
                              id="ember6681"
                              className="ember-power-select-trigger ember-power-select-multiple-trigger ember-basic-dropdown-trigger ember-view"
                            >
                              <div
                                id="ember6682"
                                className="__ui-form__select-field__trigger__power-select-multiple ember-view"
                              >
                                <ul
                                  id="ember-power-select-multiple-options-ember6680"
                                  className="ember-power-select-multiple-options"
                                >
                                  <input
                                    className="ember-power-select-trigger-multiple-input"
                                    autocomplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    id="ember-power-select-trigger-multiple-input-ember6680"
                                    aria-controls="ember-power-select-options-ember6680"
                                    style={{ width: "100%" }}
                                    placeholder="Any"
                                    aria-activedescendant="-1"
                                    aria-label="Companies combo box"
                                    data-test-id="trigger-power-select-multiple"
                                    type="search"
                                  />
                                </ul>

                                <span className="ember-power-select-status-icon"></span>
                              </div>
                            </div>
                            <div
                              id="ember-basic-dropdown-content-ember6680"
                              className="ember-basic-dropdown-content-placeholder"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <occluded-content
                        className="occluded-content"
                        style={{ height: "0px" }}
                      ></occluded-content>
                    </div>
                  </form>
                  <div id="ember6684" className="ember-view"></div>
                </div>
                <div
                  className="filter-list-footer"
                  data-test-id="filter-list-footer"
                >
                  <button
                    data-test-id="filter-apply"
                    className="btn btn--primary filter-list-btn disabled"
                    disabled=""
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contacts;

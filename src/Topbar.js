import React from "react";
import { useState } from "react";

function Topbar() {
  const [title, setTitle] = useState("My Dashboard");
  return (
    <>
      <section className="header-primary" data-identifyelement="75">
        <div className="header-primary__page-name" data-identifyelement="76">
          <div id="menu-title" data-identifyelement="77">
            <div className="breadcrumb pull-left text_content text--default m0 p0">
              <div className="category-menu-icon" id="burger-menu">
                <div
                  data-test-id="burger-menu-trigger"
                  aria-owns="ember-basic-dropdown-content-ember6316"
                  tabIndex="0"
                  data-ebd-id="ember6316-trigger"
                  role="button"
                  id="ember6318"
                  className="breadcrumb__item burger-menu-trigger trigger-shortcuts dashboard-list-menu ember-basic-dropdown-trigger ember-view"
                >
                  <span className="app-icon-btn app-icon-btn--large app-icon-btn--secondary app-icon-btn--transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="128"
                      height="128"
                      viewBox="0 0 128 128"
                      className="app-icon app-icon--dark cursor-pointer"
                    >
                      <path d="M70.4 87.9H30.3c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3h40.1c4 0 7.3-3.3 7.3-7.3-.1-4-3.3-7.3-7.3-7.3zm27.8-30.8h-68c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3h68c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3zM30.3 40.6h68c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3h-68c-4 0-7.3 3.3-7.3 7.3 0 4.1 3.3 7.3 7.3 7.3z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="breadcrumb__item">
                <div
                  data-test-title="main-title"
                  className="breadcrumb-title ellipsis"
                >
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="header-primary__user" data-identifyelement="82">
          <div className="header-primary__user__item" data-identifyelement="83">
            <div data-identifyelement="84">
              <button
                className="btn app-icon-btn get-started hint--rounded hint--bottom ml-16"
                aria-label="Learn how to get the most value out of Freshdesk for your business"
                data-identifyelement="85"
              >
                <span
                  data-test-id="getstarted-header-button"
                  data-identifyelement="86"
                >
                  Get started (16%)
                </span>
              </button>
            </div>
            <div
              className="header-create-new ml-16"
              data-test-id="header-create-new"
              data-identifyelement="87"
            >
              <div
                aria-owns="ember-basic-dropdown-content-ember29"
                tabIndex="0"
                data-ebd-id="ember29-trigger"
                role="button"
                id="ember30"
                className="ember-basic-dropdown-trigger ember-view"
                data-identifyelement="88"
              >
                <button
                  className="dropdown-toggle vertical-separator cursor-pointer app-icon-btn app-icon-btn--text"
                  aria-label="New"
                  data-test-dropdown-link="dropdownMenu"
                  data-identifyelement="89"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="app-icon app-icon--verysmall mr-10"
                    data-identifyelement="90"
                  >
                    <path
                      d="M16.945 14.522h4.789a1.21 1.21 0 110 2.422h-4.789v4.789a1.21 1.21 0 11-2.422 0v-4.789H9.734a1.21 1.21 0 110-2.422h4.789V9.733a1.21 1.21 0 112.422 0v4.789zM4.427 1.6H27.04a2.827 2.827 0 012.827 2.827V27.04a2.827 2.827 0 01-2.827 2.827H4.427A2.827 2.827 0 011.6 27.04V4.427A2.827 2.827 0 014.427 1.6zm0 2.423a.404.404 0 00-.404.404V27.04c0 .223.181.404.404.404H27.04a.404.404 0 00.404-.404V4.427a.404.404 0 00-.404-.404H4.427z"
                      data-identifyelement="91"
                    ></path>
                  </svg>
                  New
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="accordion-arrow app-icon--verysmall"
                    data-identifyelement="92"
                  >
                    <path
                      d="M8.626 9.744c-.875-.903-2.294-.903-3.17-.001s-.876 2.366-.001 3.268l8.959 9.244a2.195 2.195 0 003.171 0l8.959-9.244c.875-.903.874-2.366-.001-3.268s-2.295-.902-3.169.001L16 17.353 8.626 9.744z"
                      data-identifyelement="93"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                id="ember-basic-dropdown-content-ember29"
                className="ember-basic-dropdown-content-placeholder"
                style={{ display: "none" }}
                data-identifyelement="94"
              ></div>
            </div>

            <div
              id="ember32"
              className="app-dropdown-group ml-16 ember-basic-dropdown ember-view"
              data-identifyelement="95"
            >
              <div
                data-test-id="search-trigger"
                aria-owns="ember-basic-dropdown-content-ember32"
                tabIndex="0"
                data-ebd-id="ember32-trigger"
                role=""
                id="ember33"
                className="quick-search-trigger ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view"
                data-identifyelement="96"
              >
                <div className="search-toggle ml-16" data-identifyelement="97">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="app-icon--link app-icon--topalign app-icon--smallsecondary mr-8"
                    data-identifyelement="98"
                  >
                    <path
                      fill="#183247"
                      d="M11.015 11.95c-2.641 2.17-6.557 2.013-9.033-.464-2.635-2.635-2.644-6.898-.019-9.523s6.888-2.616 9.523.019c2.477 2.476 2.633 6.392.464 9.033l3.855 3.855c.26.26.26.679.002.937a.662.662 0 01-.937-.002l-3.855-3.855zM2.902 2.902C.793 5.01.8 8.435 2.917 10.552c2.116 2.116 5.541 2.123 7.65.015 2.108-2.109 2.101-5.534-.015-7.65C8.435.8 5.01.793 2.902 2.902z"
                      data-identifyelement="99"
                    ></path>
                  </svg>
                  search
                </div>
              </div>
              <div
                id="ember-basic-dropdown-content-ember32"
                className="ember-basic-dropdown-content-placeholder"
                style={{ display: "none" }}
                data-identifyelement="100"
              ></div>
            </div>
            <div
              id="ember155"
              className="ml-16 global-notification ember-view"
              data-identifyelement="101"
            >
              <div
                id="ember156"
                className="ember-basic-dropdown ember-view"
                data-identifyelement="102"
              >
                <div
                  aria-owns="ember-basic-dropdown-content-ember156"
                  tabIndex="0"
                  data-ebd-id="ember156-trigger"
                  role="button"
                  id="ember157"
                  className="ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view"
                  data-identifyelement="103"
                >
                  <span
                    className="cursor-pointer dropdown-toggle"
                    id="irisDropdown"
                    data-test-dropdown-link="irisDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    type="button"
                    data-identifyelement="104"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      data-test-icon="notification"
                      className="app-icon--link app-icon--topalign app-icon--large"
                      data-identifyelement="105"
                    >
                      <path
                        fill="#183247"
                        d="M4.559 15.903H.727A.74.74 0 010 15.15a.74.74 0 01.727-.754h.647v-6.36c0-3.393 2.376-6.21 5.499-6.765a1.23 1.23 0 01-.004-.1C6.869.526 7.375 0 8 0s1.131.525 1.131 1.172c0 .033-.001.066-.004.099 3.123.554 5.5 3.372 5.5 6.764v6.361h.646a.74.74 0 01.727.754.74.74 0 01-.727.753H11.44C11.205 17.653 9.755 19 8 19s-3.205-1.347-3.441-3.097zm1.48 0c.217.913 1.012 1.59 1.961 1.59.949 0 1.744-.677 1.962-1.59H6.038zm7.133-1.507v-6.36c0-2.96-2.316-5.358-5.172-5.358S2.828 5.077 2.828 8.035v6.361h10.344z"
                        data-identifyelement="106"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  id="ember-basic-dropdown-content-ember156"
                  className="ember-basic-dropdown-content-placeholder"
                  style={{ display: "none" }}
                  data-identifyelement="107"
                ></div>
              </div>
            </div>

            <div
              id="ember158"
              className="ml-16 beamerTrigger announcements ember-view beamer_beamerSelector beamer_beamerSelectorRelative"
              data-identifyelement="108"
              data-beamer-keypress="true"
            >
              <span
                className="cursor-pointer hint--rounded hint--bottom-left"
                id="launchbeamer"
                data-test-id="beamer-notification-icon"
                aria-label="What's new in Freshdesk"
                type="button"
                data-identifyelement="6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2 2"
                  className="app-icon--link app-icon--topalign app-icon--large"
                  data-identifyelement="109"
                >
                  <path
                    fill="#475867"
                    d="M1.64.14a.3.3 0 010 .26h.06a.3.3 0 01.3.28.32.32 0 01-.16.32v.72a.32.32 0 01-.08.2.28.28 0 01-.2.08H.44a.28.28 0 01-.2-.08.32.32 0 01-.08-.2V1A.33.33 0 010 .75V.7A.3.3 0 01.28.4h.11a.27.27 0 010-.26A.27.27 0 01.75 0 1 1 0 011 .4a1.11 1.11 0 01.27-.4.28.28 0 01.37.11zM.72 1h-.4v.69a.12.12 0 00.11.12h.29V1zm.56 0v.81h.28a.12.12 0 00.12-.12V1zM1.12.56H.88v1.28h.24V.56zm.16 0v.31h.42a.14.14 0 00.14-.12V.7a.13.13 0 00-.12-.14h-.44zm-.56 0H.3a.14.14 0 00-.14.12.14.14 0 00.12.19h.44V.56zm.64-.39a.39.39 0 00-.09.11l-.06.09h.13a.22.22 0 00.12 0 .11.11 0 000-.15.1.1 0 00-.14 0zm-.69 0a.1.1 0 00-.14 0 .11.11 0 000 .15.2.2 0 00.11 0h.18L.76.28A.39.39 0 00.67.17z"
                    data-identifyelement="110"
                  ></path>
                </svg>
              </span>
              <div
                className="beamer_icon noBouncy active"
                style={{
                  inset: "-15px 0px 15px 10px",
                  backgroundColor: "rgb(37, 193, 111)",
                }}
                data-beamer-keypress="true"
              >
                1
              </div>
            </div>

            <div
              id="ember35"
              className="ml-16 ember-view"
              data-identifyelement="111"
            >
              <div
                data-test-id="trigger-agent-availability"
                aria-owns="ember-basic-dropdown-content-ember36"
                tabIndex="0"
                data-ebd-id="ember36-trigger"
                role="button"
                id="ember37"
                className="ember-basic-dropdown-trigger ember-view"
                data-identifyelement="112"
              >
                <img
                  data-test-id="show-ooo-scheduled"
                  className="app-icon--xxlarge"
                  src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/svg/out-of-office-ce0ad7c00022376e847279680a88be983e6ad283645629e5fe33e903c9aff895.svg"
                  alt="Schedule out of office"
                  data-identifyelement="113"
                />
              </div>
              <div
                id="ember-basic-dropdown-content-ember36"
                className="ember-basic-dropdown-content-placeholder"
                style={{ display: "none" }}
                data-identifyelement="114"
              ></div>
            </div>
          </div>
          <div
            className="header-primary__free__trial"
            data-identifyelement="115"
          >
            <div
              className="header-primary__plan-wrapper"
              data-test-id="confirm-message-container"
              data-identifyelement="116"
            >
              <div
                className="header-primary__plan-container"
                data-identifyelement="117"
              >
                <span
                  className="header-primary__expiry_info"
                  data-identifyelement="118"
                >
                  Missing translation: undefined
                </span>
                If you do not upgrade soon, you will lose all configurations you
                have made on higher plan features. Data from current plan will
                not be lost.
                <button
                  className="btn btn--secondary text-uppercase confirm-message-btn"
                  data-test-id="confirm-message-btn"
                  data-ember-action=""
                  data-ember-action-39="39"
                  data-identifyelement="119"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
          <div
            className="header-primary__user__item dropdown"
            data-identifyelement="120"
          >
            <div
              data-test-id="profile-dropdown"
              id="ember40"
              className="app-dropdown-group pull-right ember-basic-dropdown ember-view"
              data-identifyelement="121"
            >
              <div
                aria-owns="ember-basic-dropdown-content-ember40"
                tabIndex="0"
                data-ebd-id="ember40-trigger"
                role="button"
                id="ember41"
                className="ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view"
                data-identifyelement="122"
              >
                <a
                  className="app-user-photo pull-left profile-photo dropdown-toggle"
                  id="profileDropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  type="button"
                  data-identifyelement="123"
                >
                  <figure
                    data-test-id="avatar-icon"
                    data-test-user-avatar=""
                    id="ember43"
                    className="profilepic avatar-icon avatar-icon--small avatar-icon--circle ember-view"
                    data-identifyelement="124"
                  >
                    <span
                      data-test-avatar-text="profile_font_text"
                      id="ember44"
                      className="avatar-block avatar__initial avatar__initial--5 ember-view"
                      data-identifyelement="125"
                    >
                      <span
                        className="avatar__initial--icon-wrapper"
                        data-identifyelement="126"
                      >
                        P
                      </span>
                    </span>
                  </figure>
                </a>
              </div>
              <div
                id="ember-basic-dropdown-content-ember40"
                className="ember-basic-dropdown-content-placeholder"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
        </div> */}
        <div data-identifyelement="128"></div>
      </section>
    </>
  );
}

export default Topbar;

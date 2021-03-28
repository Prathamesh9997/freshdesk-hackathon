import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <nav
      data-test-id="app-navbar"
      id="nucleus-navbar"
      style={{ background: "#284255" }}
      className="lighter __app-navbar ember-view"
      data-identifyelement="24"
    >
      <div
        data-test-id="navbar-header"
        id="nucleus-header"
        style={{ background: "#02b875" }}
        className="navbar-header ember-view"
        data-identifyelement="25"
      >
        <a
          href="/a/dashboard"
          id="ember18"
          className="nav-logo-wrapper active ember-view"
          data-identifyelement="26"
        >
          <img
            className="nav-logo"
            data-test-id="nav-header-logo"
            alt="Logo preview"
            src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/svg/global-flat/freshdesk-white-ce0ad7c00022376e847279680a88be983e6ad283645629e5fe33e903c9aff895.svg"
            data-identifyelement="27"
          />
        </a>
      </div>
      <div
        id="navbar-body"
        className="navbar-body ember-view"
        data-identifyelement="28"
      >
        <ul
          id="ember20"
          className="nav-list ember-view"
          data-identifyelement="29"
        >
          <li className="navbar-item">
            <a
              data-test-id="nav-dashboard"
              href="/a/dashboard"
              id="ember2399"
              className="nav-link active ember-view"
            >
              <span
                className="nav-icon-wrapper hint--right hint--rounded"
                aria-label="Dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="nav-icon"
                  focusable="false"
                >
                  <path d="M15.733 30.933a15.117 15.117 0 01-10.287-4.01 15.27 15.27 0 01-3.121-4.025 15.148 15.148 0 01-1.483-4.103 15.33 15.33 0 01-.187-4.997 15.132 15.132 0 011.298-4.489A15.254 15.254 0 019.73 1.764a15.063 15.063 0 012.94-.922A15.336 15.336 0 0118.422.77c1.016.181 2.013.467 2.97.852a15.245 15.245 0 017.959 7.355 15.12 15.12 0 011.405 4.442c.248 1.624.233 3.29-.046 4.909a15.103 15.103 0 01-1.36 4.16 15.267 15.267 0 01-7.196 7.024 15.14 15.14 0 01-6.13 1.418l-.294.003zm0-2.026a13.128 13.128 0 008.974-3.53 13.265 13.265 0 002.686-3.506c.577-1.094.998-2.27 1.246-3.482.297-1.45.347-2.95.151-4.417a13.141 13.141 0 00-1.113-3.805 13.229 13.229 0 00-6.742-6.54 13.168 13.168 0 00-5.03-1.065 13.199 13.199 0 00-5.075.942 13.21 13.21 0 00-6.9 6.376 13.107 13.107 0 00-1.217 3.847 13.314 13.314 0 00.054 4.341 13.1 13.1 0 001.199 3.592c.655 1.298 1.526 2.485 2.566 3.501s2.249 1.86 3.564 2.483a13.117 13.117 0 005.639 1.264zm3.737-9.398a4.368 4.368 0 01.594 3.027 4.355 4.355 0 01-.375 1.182 4.388 4.388 0 01-3.845 2.484l-.113.001a4.363 4.363 0 01-1.807-.389 4.422 4.422 0 01-2.103-2.002 4.366 4.366 0 01-.446-2.557 4.364 4.364 0 011.289-2.585 4.387 4.387 0 015.362-.601c1.449-1.491 2.948-2.933 4.419-4.403a1.039 1.039 0 01.37-.235 1.02 1.02 0 01.999.176 1.02 1.02 0 01.327 1.038 1.022 1.022 0 01-.232.422c-1.447 1.512-2.954 2.967-4.439 4.442zm-3.739 4.668c.335-.002.667-.07.972-.208a2.385 2.385 0 001.332-1.621 2.379 2.379 0 00-.148-1.507 2.387 2.387 0 00-1.211-1.196 2.364 2.364 0 10-1.008 4.53l.061.001zm8.963-11.478l-.084-.004a1.017 1.017 0 01-.714-.392c-.051-.066-.089-.139-.129-.212l-.074-.134a9.281 9.281 0 00-.714-1.084 9.177 9.177 0 00-4.206-3.065 9.194 9.194 0 00-4.255-.44 9.08 9.08 0 00-4.9 2.271 9.234 9.234 0 00-1.96 2.518l-.043.072c-.043.061-.052.078-.102.133a1.036 1.036 0 01-.827.328 1.02 1.02 0 01-.903-.757 1.016 1.016 0 01.021-.578c.024-.071.034-.087.066-.154a11.643 11.643 0 01.784-1.267 11.2 11.2 0 015.269-4.007 11.21 11.21 0 015.284-.57 11.1 11.1 0 015.718 2.535 11.233 11.233 0 012.626 3.236l.042.079c.032.067.043.083.066.154a.978.978 0 01.038.496 1.021 1.021 0 01-.756.811c-.072.018-.091.018-.165.027l-.084.003z"></path>
                </svg>
              </span>
            </a>
          </li>

          <li className="navbar-item">
            <Link
              to="/tickets"
              data-test-id="nav-tickets"
              href="/a/tickets"
              id="ember2403"
              className="nav-link ember-view"
            >
              <span
                className="nav-icon-wrapper hint--right hint--rounded"
                aria-label="Tickets"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="nav-icon"
                  focusable="false"
                >
                  <path d="M.267 12.874V10.23a3.824 3.824 0 013.818-3.831h23.831a3.825 3.825 0 013.818 3.831v2.644l-1.018.563c-1.076.595-1.736 1.665-1.736 2.83s.66 2.235 1.736 2.83l1.018.563v2.644a3.824 3.824 0 01-3.818 3.831H4.085a3.825 3.825 0 01-3.818-3.831V19.66l1.018-.563c1.076-.595 1.736-1.665 1.736-2.83s-.66-2.235-1.736-2.83l-1.018-.563zm4.72 3.393c0 1.948-1.107 3.648-2.753 4.558v1.478c0 1.026.829 1.857 1.851 1.857h23.831a1.855 1.855 0 001.851-1.857v-1.478c-1.646-.91-2.753-2.61-2.753-4.558s1.107-3.648 2.753-4.558v-1.478a1.854 1.854 0 00-1.851-1.857H4.085a1.855 1.855 0 00-1.851 1.857v1.478c1.646.91 2.753 2.61 2.753 4.558zm5.981-5.14h10.065a3.825 3.825 0 013.818 3.831v2.6a3.824 3.824 0 01-3.818 3.831H10.968a3.825 3.825 0 01-3.818-3.831v-2.6a3.824 3.824 0 013.818-3.831zm0 1.973a1.855 1.855 0 00-1.851 1.857v2.6c0 1.026.829 1.857 1.851 1.857h10.065a1.855 1.855 0 001.851-1.857v-2.6a1.854 1.854 0 00-1.851-1.857H10.968z"></path>
                </svg>
              </span>
            </Link>
          </li>

          {/* <li id="ember2406" className="navbar-item ember-view">
            <div
              id="ember2407"
              className="navbar-dropdown navbar-item ember-basic-dropdown ember-view"
            >
              <div
                data-test-id="nav-dropdown-link-contacts"
                aria-owns="ember-basic-dropdown-content-ember2407"
                tabIndex="0"
                data-ebd-id="ember2407-trigger"
                role="button"
                id="ember2408"
                className="nav-link ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view"
              >
                <span className="nav-icon-wrapper" aria-label="Contacts">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 2"
                    viewBox="0 0 20 20"
                    className="nav-icon"
                    focusable="false"
                  >
                    <path d="M10 3.92a3 3 0 103 3 3 3 0 00-3-3zm0 4.54a1.57 1.57 0 111.57-1.57A1.57 1.57 0 0110 8.46zM16.06 1H3.94A2.94 2.94 0 001 3.94v12.12A2.94 2.94 0 003.94 19h12.12A2.94 2.94 0 0019 16.06V3.94A2.94 2.94 0 0016.06 1zM5.78 17.6l.67-4A1.54 1.54 0 018 12.27h4a1.54 1.54 0 011.52 1.29l.67 4zm11.82-1.54a1.54 1.54 0 01-1.54 1.54h-.42l-.71-4.27A2.93 2.93 0 0012 10.87H8a2.93 2.93 0 00-2.9 2.46l-.74 4.27h-.42a1.54 1.54 0 01-1.54-1.54V3.94A1.54 1.54 0 013.94 2.4h12.12a1.54 1.54 0 011.54 1.54z"></path>
                  </svg>
                </span>
              </div>
              <div
                id="ember-basic-dropdown-content-ember2407"
                className="ember-basic-dropdown-content-placeholder"
                style={{ display: "none" }}
              ></div>
            </div>
          </li> */}

          <li className="navbar-item">
            <Link
              to="/contacts"
              data-test-id="nav-contacts"
              href="/a/contacts"
              id="ember2407"
              className="nav-link ember-view"
            >
              <span
                className="nav-icon-wrapper hint--right hint--rounded"
                aria-label="Contacts"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 2"
                  viewBox="0 0 20 20"
                  className="nav-icon"
                  focusable="false"
                >
                  <path d="M10 3.92a3 3 0 103 3 3 3 0 00-3-3zm0 4.54a1.57 1.57 0 111.57-1.57A1.57 1.57 0 0110 8.46zM16.06 1H3.94A2.94 2.94 0 001 3.94v12.12A2.94 2.94 0 003.94 19h12.12A2.94 2.94 0 0019 16.06V3.94A2.94 2.94 0 0016.06 1zM5.78 17.6l.67-4A1.54 1.54 0 018 12.27h4a1.54 1.54 0 011.52 1.29l.67 4zm11.82-1.54a1.54 1.54 0 01-1.54 1.54h-.42l-.71-4.27A2.93 2.93 0 0012 10.87H8a2.93 2.93 0 00-2.9 2.46l-.74 4.27h-.42a1.54 1.54 0 01-1.54-1.54V3.94A1.54 1.54 0 013.94 2.4h12.12a1.54 1.54 0 011.54 1.54z"></path>
                </svg>
              </span>
            </Link>
          </li>

          {/* <li className="navbar-item">
            <a
              data-test-id="nav-solutions"
              href="/a/solutions"
              id="ember2413"
              className="nav-link ember-view"
            >
              <span
                className="nav-icon-wrapper hint--right hint--rounded"
                aria-label="Solutions"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 2"
                  viewBox="0 0 20 20"
                  className="nav-icon"
                  focusable="false"
                >
                  <path d="M17.88 16.73a.7.7 0 01-.7.7h-2.83a5.92 5.92 0 00-3.43 1.08l-.52.36a.68.68 0 01-.8 0l-.52-.36a5.94 5.94 0 00-3.43-1.08H2.82a.7.7 0 010-1.4h2.83a7.37 7.37 0 014.23 1.33l.12.09.11-.08A7.33 7.33 0 0114.35 16h2.83a.7.7 0 01.7.73zM19 1.7v12.14a.7.7 0 01-.7.7h-4.51a6.07 6.07 0 00-3.4 1h-.15a.6.6 0 01-.48 0h-.15a6.07 6.07 0 00-3.4-1H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h4.51A7.5 7.5 0 0110 2a7.5 7.5 0 013.79-1h4.51a.7.7 0 01.7.7zM6.21 13.14a7.47 7.47 0 013.09.67V3.25a6.11 6.11 0 00-3.09-.85H2.4v10.74zM17.6 2.4h-3.81a6.11 6.11 0 00-3.09.85v10.56a7.47 7.47 0 013.09-.67h3.81z"></path>
                </svg>
              </span>
            </a>
          </li> */}

          {/* <li className="navbar-item">
            <a
              data-test-id="nav-chatbots"
              href="/a/admin/chat-bot"
              id="ember2417"
              className="nav-link ember-view"
            >
              <span
                className="nav-icon-wrapper hint--right hint--rounded"
                aria-label="Chatbots"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="nav-icon"
                  focusable="false"
                >
                  <path d="M30.933 17.831v-1.734a4.123 4.123 0 00-3.15-3.989V5.364a1.474 1.474 0 10-2.438-1.118c.004.428.19.834.511 1.118v.742a5.435 5.435 0 00-1.387-.829l-7.524-2.881V2.03a.963.963 0 10-1.926 0v.366l-7.476 2.89a5.452 5.452 0 00-1.397.829v-.684a1.54 1.54 0 00.597-1.224 1.57 1.57 0 10-2.524 1.224v6.677a4.123 4.123 0 00-3.15 3.989v1.734a4.115 4.115 0 003.15 3.989v7.187H2.032a.963.963 0 100 1.926h27.94a.963.963 0 100-1.926h-2.235V21.82a4.116 4.116 0 003.199-3.989zm-1.927-1.735v1.734a2.197 2.197 0 01-1.224 1.927V14.14a2.186 2.186 0 011.224 1.956zm-21.87 1.792h17.679v2.765a.73.73 0 01-.732.732h-3.921a.723.723 0 01-.694-.511l-.096-.202a2.688 2.688 0 00-2.582-1.927h-1.657a2.697 2.697 0 00-2.582 1.927l-.067.202a.723.723 0 01-.694.511H7.869a.73.73 0 01-.732-.732v-2.765zM8.235 7.04l6.744-2.582v7.351a.963.963 0 101.926 0V4.458l6.744 2.572a3.334 3.334 0 012.1 3.112v5.781H6.143v-5.781A3.324 3.324 0 018.234 7.04zM2.994 17.831v-1.734a2.187 2.187 0 011.224-1.927v5.675a2.197 2.197 0 01-1.224-2.014zm3.15 11.175v-6.339a2.65 2.65 0 001.725.645h3.921a2.641 2.641 0 002.534-1.859l.067-.202a.77.77 0 01.742-.549h1.686a.77.77 0 01.742.549l.067.202a2.638 2.638 0 002.534 1.859h3.921a2.653 2.653 0 001.725-.645v6.339H6.144z"></path>
                </svg>
              </span>
            </a>
          </li> */}

          {/* <li id="ember2420" className="navbar-item ember-view">
            <div
              id="ember2421"
              className="navbar-dropdown navbar-item ember-basic-dropdown ember-view"
            >
              <div
                data-test-id="nav-dropdown-link-analytics"
                aria-owns="ember-basic-dropdown-content-ember2421"
                tabIndex="0"
                data-ebd-id="ember2421-trigger"
                role="button"
                id="ember2422"
                className="nav-link ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view"
              >
                <span className="nav-icon-wrapper" aria-label="Analytics">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 60"
                    className="nav-icon"
                    focusable="false"
                  >
                    <path d="M46.5 57.2h-32C8.7 57.2 4 52.4 4 46.6v-32C4 8.8 8.7 4 14.6 4h32c5.8 0 10.6 4.8 10.6 10.6v32c-.1 5.8-4.8 10.6-10.7 10.6zM14.6 8.5c-3.4 0-6.1 2.7-6.1 6.1v32c0 3.4 2.7 6.1 6.1 6.1h32c3.4 0 6.1-2.7 6.1-6.1v-32c0-3.4-2.7-6.1-6.1-6.1h-32z"></path>
                    <path d="M17.3 46.1c-1.3 0-2.3-1-2.3-2.3V17.7c0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3v26.2c0 1.2-1.1 2.2-2.3 2.2zm12.7 0c-1.3 0-2.3-1-2.3-2.3v-9.1c0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3v9.1c0 1.3-1 2.3-2.3 2.3zm12.8 0c-1.3 0-2.3-1-2.3-2.3V21.9c0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3v21.9c0 1.3-1 2.3-2.3 2.3z"></path>
                  </svg>
                </span>
              </div>
              <div
                id="ember-basic-dropdown-content-ember2421"
                className="ember-basic-dropdown-content-placeholder"
                style={{ display: "none" }}
              ></div>
            </div>
          </li> */}
          {/* <li className="navbar-item">
            <a
              data-test-id="nav-admin"
              href="/a/admin"
              id="ember2427"
              className="nav-link ember-view"
            >
              <span
                className="nav-icon-wrapper hint--right hint--rounded"
                aria-label="Admin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="nav-icon"
                  focusable="false"
                >
                  <path d="M23.493 24.692a4.186 4.186 0 01.026-4.238 4.3 4.3 0 013.694-2.098h1.161v-4.361h-.851a4.56 4.56 0 01-3.959-2.295 4.584 4.584 0 01.013-4.569l.427-.737-3.76-2.165-.483.835c-.787 1.36-2.242 2.197-3.817 2.196s-3.028-.839-3.815-2.199l-.486-.839-3.786 2.18.433.748a4.57 4.57 0 01.015 4.555 4.54 4.54 0 01-3.946 2.29h-.734v4.361h1.028c1.521 0 2.929.799 3.707 2.103.78 1.308.79 2.934.027 4.252l-.518.895 3.76 2.165.483-.835c.787-1.36 2.242-2.197 3.817-2.196s3.028.839 3.815 2.199l.486.839 3.786-2.18-.524-.906zm2.37.053c.509.88.207 2.005-.675 2.512l-4.102 2.362a1.847 1.847 0 01-2.519-.673l-.577-.997a2.381 2.381 0 00-4.122-.003l-.574.992a1.846 1.846 0 01-2.519.673l-4.076-2.347a1.836 1.836 0 01-.675-2.512l.609-1.052a2.18 2.18 0 00-.014-2.208 2.288 2.288 0 00-1.965-1.115H3.443a1.842 1.842 0 01-1.844-1.839v-4.725c0-1.016.826-1.839 1.844-1.839h.916c.904 0 1.738-.484 2.184-1.268.45-.79.447-1.759-.009-2.546l-.524-.906a1.837 1.837 0 01.675-2.513l4.102-2.362a1.846 1.846 0 012.519.673l.577.997a2.381 2.381 0 004.122.003l.574-.992a1.846 1.846 0 012.519-.673l4.076 2.347a1.837 1.837 0 01.675 2.513l-.518.895a2.565 2.565 0 00-.008 2.558 2.53 2.53 0 002.198 1.274h1.034c1.018 0 1.844.823 1.844 1.839v4.725a1.842 1.842 0 01-1.844 1.839h-1.344a2.27 2.27 0 00-1.951 1.108 2.169 2.169 0 00-.013 2.196l.616 1.064zm-9.926-2.966c-3.206 0-5.807-2.587-5.807-5.779s2.6-5.779 5.807-5.779c3.206 0 5.807 2.587 5.807 5.779s-2.6 5.779-5.807 5.779zm0-2.021c2.088 0 3.78-1.683 3.78-3.758s-1.692-3.758-3.78-3.758-3.78 1.683-3.78 3.758 1.692 3.758 3.78 3.758z"></path>
                </svg>
              </span>
            </a>
          </li> */}
        </ul>
        <div
          id="ember21"
          className="navbar-footer ember-view"
          data-identifyelement="65"
        >
          <ul
            id="ember843"
            className="pinned-apps nav-list ember-view"
            data-identifyelement="66"
          >
            <li className="navbar-item" data-identifyelement="67">
              <div
                data-test-id="nav-omnibar-switcher"
                tabIndex="0"
                id="ember846"
                className="wc-trigger-button nav-link global-navbar ember-view"
                data-identifyelement="68"
              >
                <div
                  className="freshworks-omnibar-event-target"
                  data-omnibar-event-target=""
                  data-identifyelement="69"
                >
                  <div className="trigger-button-container">
                    <div
                      id="omnibar-trigger-button"
                      className="freshworks-omnibar-tooltip-holder right wide"
                      data-freshworks-omnibar-tooltip="Freshworks Switcher"
                    >
                      <img src="https://accounts.freshworks.com/omnibar/assets/switcher.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

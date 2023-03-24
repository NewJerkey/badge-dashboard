import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class BadgeDashboard extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .searchbar {
      box-shadow: 1px 1px 1px 2px gray;
      margin: auto;
      margin-top: 5px;
      width: fit-content;
    }
    .searchInput {
      width: 1300px;
      height: 50px;
      border: 0;
    }
    .icon {
      width: 45px;
    }

    .space-between-searchbar-and-badges{
       padding: 20px;
    }

    .badge-all {
      display: block;
      letter-spacing: 0.02em;
      float: left;
      height: 135px;
      width: 280px;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      font-weight: 300;
      font-size: 12px;
      line-height: 20px;
      margin: 0 10px 10px 0;
      background: transparent;
      border: 1px solid #fff;
      border-color: #3e98d3;
      border-radius: 6px;
    }

    .badge-top {
      background-color: #cfe6f4;
      border-left: 15px solid #3e98d3;
      color: #333333;
      font-weight: 400;
      height: 2.25em;
      line-height: 2.25em;
      padding: 0 0.75em;
    }

    .badge-body {
      border-left: 15px solid #3e98d3;
      vertical-align: top;
      padding: 10px 10px;
      overflow: hidden;
      position: relative;
      font-weight: 400;
      font-size: 12px;
      margin-bottom: 10px;
    }

    .badgepic {
      float: right;
      width: 60px;
      height: 60px;
      display: block;
      background-size: contain;
    }

    .creator {
      border-left: 15px solid #3e98d3;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      min-height: 30px;
    }

    .badge-creator-name {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-bottom: 5px;
      margin-left: 10px;
      margin-right: 15px;
      font-weight: 400;
      font-size: 13px;
    }
  `;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
      <main>
        <div class="searchbar">
          <form>
            <simple-icon icon="search" class="icon"></simple-icon>
            <input
              class="searchInput"
              type="text"
              placeholder="Search Content, Topics, and People"
            />
          </form>
        </div>

        <div class="space-between-searchbar-and-badges">
          <div class="badge-all">
            <div class="badge-top">
              <span class="badge-top-title">Technology & Information</span>
            </div>

            <div class="badge-body">
              <div class="badge-image">
                <img
                  class="badgepic"
                  src="https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png"
                  alt="badge"
                />
              </div>
              <h3>APA Style Citations: Introduction</h3>
            </div>

            <div class="creator">
              <div class="badge-creator-name">Creator: Ethan Chen</div>
            </div>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define("badge-dashboard", BadgeDashboard);

import { LitElement, html, css } from "lit";
import "./badge-dashboard";
import "./search-bar";

export class BadgeList extends LitElement {
  static get tag() {
    return "badge-list";
  }

  static get properties() {
    return {
      list: { type: Array },
      prompt: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.list = [];
    this.updateRoster();
    this.filterSearch(this.list, this.prompt);
    this.prompt = "";
  }

  updateRoster() {
    const address = '../api/badges';
    // const address = "../assets/badge-map.json";
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.list = data;
      });
  }

  filterSearch(items, prompt) {
    return items.filter((thing) => {
      for (var item in thing) {
        if (
          thing[item].toString().toLowerCase().includes(prompt.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }

  async _handleSearchEvent(e) {
     this.prompt = e.detail.value;
 }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        width: 400px;
        display: flex;
      }
      .item {
        display: inline-flex;
      }

      .page-title {
        margin-bottom: 15px;
        font-size: 20px;
        display: inline-block;
        padding: 5px 0 10px 10px;
      }

      .spacearoundwhitebackdropbox {
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
      }

      .whitebackdrop {
        padding: 12px 20px 15px 20px;
        background-color: #fff;
        margin-bottom: 25px;
        border-radius: 4px;
      }

      .h3 {
        font-family: "effra", sans-serif;
        font-weight: 300;
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 10px;
      }
    `;
  }

  render() {
    return html`
<div class="page-title">
    <h1>Explore<h1>
  </div>

  <div class="spacearoundwhitebackdropbox">
    <div class="whitebackdrop">
      <div class="h3">
        Explore our content in a self-guided manner. Want us to guide you through learning new skills?
        Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all
        the options within a certain subject area?
        You can do that with Topics
      </div>
        <search-bar @value-changed="${this._handleSearchEvent}"></search-bar>
    </div>
  </div>

  <div class="spacearoundwhitebackdropbox">
    <div class="whitebackdrop">
    <div class="wrapper">
        ${this.filterSearch(this.list, this.prompt).map(
          (badge) => html`
            <div class="item">
              <badge-dashboard
                badgeTopTitle="${badge.badgeTopTitle}"
                badgePic="${badge.badgePic}"
                badgeTitleName="${badge.badgeTitleName}"
                badgeCreatorName="${badge.badgeCreatorName}"
              ></badge-dashboard>
            </div>
          `
        )}
      </div>
    </div>
  </div>



      <!-- <div class="wrapper">
        ${this.filterSearch(this.list, this.prompt).map(
          (badge) => html`
            <div class="item">
              <badge-dashboard
                badgeTopTitle="${badge.badgeTopTitle}"
                badgePic="${badge.badgePic}"
                badgeTitleName="${badge.badgeTitleName}"
                badgeCreatorName="${badge.badgeCreatorName}"
              ></badge-dashboard>
            </div>
          `
        )}
      </div> -->
    `;
  }
}
customElements.define(BadgeList.tag, BadgeList);

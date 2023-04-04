import { LitElement, html, css } from "lit";
import "./badge-dashboard";

export class BadgeList extends LitElement {
  static get tag() {
    return "badge-list";
  }

  static get properties() {
    return {
      list: { type: Array },
      prompt: { type: String, reflect: true}
    };
  }

  constructor() {
    super();
    this.list = [];
    this.updateRoster();
    this.filterSearch(this.list, this.prompt);
    this.prompt = "spenser";
  }

  updateRoster() {
    // const address = '../api/badges';
    const address = '../assets/badge-map.json';
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
        if (thing[item].toString().toLowerCase().includes(prompt.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  // need a function that updates prompt

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
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.filterSearch(this.list, this.prompt).map(
          badge => html`
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
    `;
  }
}
customElements.define(BadgeList.tag, BadgeList);

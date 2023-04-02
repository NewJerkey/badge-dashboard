import { LitElement, html, css } from "lit";
import "./badge-dashboard";

export class BadgeList extends LitElement {
  static get tag() {
    return "badge-list";
  }

  static get properties() {
    return {
      list: { type: Array },
    };
  }

  constructor() {
    super();
    this.list = [];
    this.updateRoster();
  }

  updateRoster() {
    const address = '../api/badges';
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
        ${this.list.map(
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

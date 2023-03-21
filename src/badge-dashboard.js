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
    .icon{
      width: 45px;
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
      </main>
    `;
  }
}

customElements.define("badge-dashboard", BadgeDashboard);

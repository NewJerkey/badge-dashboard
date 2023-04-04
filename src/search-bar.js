import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class Searchbar extends LitElement {
  static properties = {
    searchText: {
      type: String,
      reflect: true
    },
    icon: {
      type: String,
      reflect: true
    },
    searchInput: {
      type: String
    }
  }
  static styles = css`
    /* .searchbar {
      box-shadow: 1px 1px 1px 2px gray;
      margin: auto;
      margin-top: 5px;
      width: fit-content;
    } */

    .searchbar {
    margin-top: 30px;
    margin-right: 5px;
    margin-left: 5px;
    padding: 10px;
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.3);
    }

    .searchInput {
      width: 1300px;
      height: 50px;
      border: 0;
    }
    .icon {
      width: 45px;
    }
  `;

  constructor() {
    super();
    this.searchText = "Search Content, Topics, and People";
    this.icon = "search";
    this.searchInput = "";
  }

  searchInput(e) {
    this.searchInput = this.shadowRoot.querySelector('input').value;
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('searchInput')) {
      this.dispatchEvent(new CustomEvent('searchChange', {
        query: {
          value: this.searchInput
        }
      }));
    }
  }

  render() {
    return html`
      <main>
        <div class="searchbar">
          
            <simple-icon icon=${this.icon} class="icon"></simple-icon>
            <input
              class="searchInput"
              type="text"
              placeholder=${this.searchText}
              @input="${this.searchInput}"
            />
            
          
        </div>
      </main>
    `;
  }
}

customElements.define("search-bar", Searchbar);

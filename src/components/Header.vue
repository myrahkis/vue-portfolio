<script setup>
import Ruler from "../../ui/Ruler.vue";
import DropDownMenus from "./DropDownMenus.vue";
</script>

<template>
  <header class="header">
    <div class="site-nav-container">
      <div class="nav-wrapper">
        <img class="doc-icon" src="/src/assets/logo-doc.png" alt="" />
        <div>
          <p class="doc-name">Doc Name</p>
          <DropDownMenus />
        </div>
      </div>
      <div>
        <div>
          <div>
            <img class="lock-icon" src="" alt="" />
            <p>Посетитель</p>
          </div>
        </div>
        <img class="avatar" src="" alt="" />
      </div>
    </div>
    <div class="doc-tools-container">
      <div>
        <button class="cancel-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#48494a"
            viewBox="0 0 24 24"
            width="1.5rem"
            height="1.5rem"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g>
                <path fill="none" d="M 0 0 h 24 v 24 H 0 Z" />
                <path
                  d="M 5.828 7 l 2.536 2.536 L 6.95 10.95 L 2 6 l 4.95 -4.95 l 1.414 1.414 L 5.828 5 H 13 a 8 8 0 1 1 0 16 H 4 v -2 h 9 a 6 6 0 1 0 0 -12 H 5.828 Z"
                />
              </g>
            </g>
          </svg>
        </button>
        <button class="repeat-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#48494a"
            viewBox="0 0 24 24"
            width="1.5rem"
            height="1.5rem"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <g>
                <path fill="none" d="M 0 0 h 24 v 24 H 0 Z" />
                <path
                  d="M 18.172 7 H 11 a 6 6 0 1 0 0 12 h 9 v 2 h -9 a 8 8 0 1 1 0 -16 h 7.172 l -2.536 -2.536 L 17.05 1.05 L 22 6 l -4.95 4.95 l -1.414 -1.414 L 18.172 7 Z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="drop-down-width u-tools-hover">Width</div>
      <div class="drop-down-font u-tools-hover">Font</div>
      <div class="font-size-selector">
        <button class="less-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#48494a"
            viewBox="0 0 24 24"
            width="1.8rem"
            height="1.8rem"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <title />
              <g id="Complete">
                <g id="minus">
                  <line
                    fill="none"
                    stroke="#48494a"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="4"
                    y1="12"
                    x2="20"
                    y2="12"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <span>10</span>
        <button class="more-btn u-tools-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#48494a"
            viewBox="0 0 24 24"
            width="1.8rem"
            height="1.8rem"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <title />
              <g id="Complete">
                <g id="add-2" data-name="add">
                  <g>
                    <line
                      fill="none"
                      stroke="#48494a"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="12"
                      y1="19"
                      x2="12"
                      y2="5"
                    />
                    <line
                      fill="none"
                      stroke="#48494a"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="drop-down-text-color u-tools-hover">Text color</div>
      <div class="drop-down-bg-text-color u-tools-hover">Bg text color</div>
    </div>
    <Ruler :rotate="false" />

    <!-- <router-link to="/">About me</router-link>
    <router-link to="/simples">Simples</router-link>
    <router-link to="/ws-chat">WS Chat</router-link>
    <router-link to="/cyclone">Cyclone</router-link>
    <router-link to="/friendly-poker-club">FriendlyPokerClub</router-link> -->
  </header>
</template>

<style scoped>
.header {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 0 2rem;
  padding-top: 1rem;
}
.site-nav-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.3rem;
}
.nav-wrapper {
  display: flex;
  align-items: center;
}

.doc-icon {
  width: 3rem;
  margin-right: 0.5rem;
}
.doc-name {
  padding: 0 0.8rem;
  font-size: 1.9rem;
  color: var(--text-color-1);
}

.doc-tools-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-color-1);
  color: var(--text-color-1);
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.font-size-selector {
  display: flex;
  align-items: center;
}
.less-btn,
.more-btn {
  svg {
    display: flex;
    align-items: center;
  }
}
</style>

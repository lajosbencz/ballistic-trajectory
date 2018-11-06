<template>
    <div class="c-menu">
        <ul>
            <li>
                <i18n path="title"></i18n>
            </li>
            <li>
                <router-link :to="{name:'index'}">Index</router-link>
            </li>
            <li>
                <router-link :to="{name:'about'}">About</router-link>
            </li>
            <li class="language-select">
                <select :title="$t('languageChange')"
                        v-model="$i18n.locale">
                    <option v-for="(lang, i) in availableLanguages"
                            :key="i"
                            :value="i">
                        {{ lang }}
                    </option>
                </select>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Menu",
    i18n: {
      messages: {
        en: {
          languageChange: 'Change language',
        },
        hu: {
          languageChange: 'Nyelv választása',
        },
      },
    },
    data() {
      return {
        availableLanguages: {
          hu: 'Magyar',
          en: 'English',
        },
      };
    },
  }
</script>

<style lang="scss">
    .c-menu {
        display: block;
        border-bottom: 1px solid #bbb;

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                padding: 0;
                margin: 0;
                display: inline-block;

                &.language-select {
                    float: right;
                    padding: 2px 2px 0 2px;
                }

                a {
                    display: inline-block;
                    padding: 2px 6px;

                    &:hover {
                    }
                }
            }
        }
    }
</style>
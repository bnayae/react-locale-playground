import * as React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import * as locale_ar from "react-intl/locale-data/ar";
import * as locale_de from "react-intl/locale-data/de";
import * as locale_fr from "react-intl/locale-data/fr";
import * as locale_he from "react-intl/locale-data/he";
import * as locale_zh from "react-intl/locale-data/zh";
import App from "./App";
import messages_ar from "./translations/locales/ar.json";
import messages_de from "./translations/locales/de.json";
import messages_fr from "./translations/locales/fr.json";
import messages_he from "./translations/locales/he.json";
import messages_zh from "./translations/locales/zh.json";

addLocaleData([
  ...locale_de,
  ...locale_ar,
  ...locale_fr,
  ...locale_zh,
  ...locale_he
]);

interface IState {
  locale: string;
}

const messages = {
  en: null,
  fr: messages_fr,
  // tslint:disable-next-line:object-literal-sort-keys
  ar: messages_ar,
  de: messages_de,
  zh: messages_zh,
  he: messages_he
};

class LanguageContainer extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    // tslint:disable-next-line:no-console
    console.log("locale: ", navigator.language);

    this.state = {
      locale: navigator.language
    };
  }

  public changeLanguage = (locale: string) => {
    this.setState({
      locale
    });
  };

  public render() {
    const msg = messages[this.state.locale];
    // tslint:disable-next-line:no-console
    console.log("here: ", navigator.language);

    return (
      <IntlProvider
        key={this.state.locale}
        locale={this.state.locale}
        messages={msg}
      >
        <App
          changeLanguage={this.changeLanguage}
          currentLocale={this.state.locale}
        />
      </IntlProvider>
    );
  }
}

export default LanguageContainer;

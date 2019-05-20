import * as React from "react";
import { FormattedMessage } from "react-intl";
import "./App.css";

interface IProps {
  changeLanguage: (locale: string) => void;
  currentLocale: string;
}

class App extends React.Component<IProps> {
  private locales = {
    en: "English",
    fr: "French",
    // tslint:disable-next-line:object-literal-sort-keys
    ar: "Arabic",
    de: "German",
    zh: "Chinese",
    he: "Hebrew"
  };

  constructor(props: IProps) {
    super(props);
  }

  public handleChange = (e: any) => {
    this.props.changeLanguage(e.target.value);
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <FormattedMessage id="helloworld" defaultMessage={"Hello World"} />
          </h1>
        </header>
        <p className="App-intro">
          <FormattedMessage
            id="localization-dropdown-description"
            defaultMessage="To change the language of the application, select one of the supported languaged in this dropdown"
            description="Dropdown to change locale"
          />
        </p>
        <select
          onChange={this.handleChange}
          name="select language"
          value={this.props.currentLocale}
        >
          {Object.keys(this.locales).map(key => {
            return (
              <option value={key} key={key}>
                {this.locales[key]}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default App;

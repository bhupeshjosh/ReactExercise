import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  state = {
    query: "",
  };

  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  clearQuery = (event) => {
    this.setState({ query: "" });
  };
  render() {
    let { query } = this.state;
    let { contacts, onClick } = this.props;
    let showingContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            placeholder="Enter Search"
            value={query}
            onChange={this.updateQuery}
          ></input>
        </div>
        {showingContacts.length < contacts.length && (
          <div className="showing-contacts">
            <span>{`Showing ${showingContacts.length} of ${contacts.length}`}</span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <ul>
          {showingContacts.map((contact) => (
            <li key={contact.id} className={"contact-list-item"}>
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contact.avatarURL})` }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>

              <div
                className={"contact-remove"}
                onClick={() => onClick(contact)}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contact: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListContacts;

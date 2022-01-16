import React, { Component } from "react";

class ListContacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contact.map((contact) => (
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
              onClick={() => this.props.onClick(contact)}
            ></div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListContacts;

import ContactListItem from "components/ContactListItem/ContactListItem";

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => handleDelete(id)}
        />
      ))}
    </ul>
  );
}

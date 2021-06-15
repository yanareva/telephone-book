const ContactListItem = ({ id, name, surname, phone, onRemove }) => {
  return (
    <table>
      <tbody>
        <th>{name}</th>
        <th>{surname}</th>
        <th>{phone}</th>
        <button onClick={() => onRemove(id)}> Delete</button>
      </tbody>
    </table>
  );
};
const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <table>
      <tbody>
        {contacts.map((contact) => (
          <ContactListItem {...contact} onRemove={onRemove} />
        ))}
      </tbody>
    </table>
  );
};
export default ContactList;

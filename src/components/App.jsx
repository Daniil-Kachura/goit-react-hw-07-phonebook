import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsThunk';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <article class="wrapper">
        <div style={{ display: 'flex', justifyContent: `space-around`,}}>
          <div class="container">
            <h1 style={{textAlign: 'center',}}>Phonebook</h1>
            <ContactForm />
          </div>
          <div class="container">
            <Filter />
            <h2 style={{ marginBottom: '0' }}>Contacts</h2>
            {error && <h2>Error...</h2>}
            {isLoading && <h3 style={{ color: 'green' }}>Loading...</h3>}
            <div style={{ color: 'blue', marginTop: '10px' }}></div>
            {contacts.length > 0 ? (
              <>
                <ContactList />
              </>
            ) : (
              <h2>You have not added contacts yet</h2>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

import { createContext} from 'react';

const UserContext = createContext();

export default UserContext

/*
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserData = async() =>{
        try {
        const userData = await fetchUserData();
        setUser(userData);
        } catch(error){
        console.error('fetch Error',error)
        }
    }

  useEffect(getUserData,[])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('context Error');
  }
  return context;
};
*/
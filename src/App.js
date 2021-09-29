import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import FriendListItem from './components/Friends/FriendListItem';
import TransactionHistory from './components/Transactions/Transactions';
import user from './db/user.json';
import statistical from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statistical} />
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

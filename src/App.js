import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendsList from "./components/FriendsList";
import TransactionHistory from "./components/TransactionHistory";

import user from './JSON/user.json';
import statisticalData from './JSON/statistical-data.json';
import friends from './JSON/friends.json';
import transactions from './JSON/transactions.json';

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics
        // title="Upload stats"
        stats={statisticalData}
      />

      <FriendsList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
}

export default App;
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link'

const Sidebar = () => {
  return (
    <Menu >
      <Link href="https://www.history.com/topics/halloween/history-of-halloween">
      <a className="menu-item" target="_blank">
        History of Halloween
      </a>
      </Link>
      <Link href="#costumes">
      <a className="menu-item" >
        Costumes
      </a>
      </Link>
      <Link href="https://mckynlee.github.io/about/">
      <a className="menu-item" target="_blank">
        About the author
      </a>
      </Link>
    </Menu>
  );
};

export default Sidebar;
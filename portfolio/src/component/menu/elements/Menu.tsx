import ContactBtn from './ContactBtn';
import MenuItem from './MenuItem';

function Menu() {

    return (<>
        <MenuItem title={"About"} />
        <MenuItem title={"Projects"} />
        <MenuItem title={"Services"} />
        <ContactBtn title={'Contact Me'} />
    </>);
}

export default Menu;
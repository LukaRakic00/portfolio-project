import DownloadButton from '@/static/DownloadButton';
import ContactBtn from './ContactBtn';
import MenuItem from './MenuItem';

function Menu() {
    return (
        <>
            <MenuItem title={"About"} />
            <MenuItem title={"Projects"} />
            <MenuItem title={"Services"} />
            <ContactBtn title={'Contact Me'} />
            {/* Div sa debelim ivicama i zaobljenim uglovima, dugme bez pozadine */}
            <div className="w-[180px] h-[50px] flex items-center justify-center border-2 border-white rounded-lg">
                <DownloadButton className="w-full h-full text-sm py-2 px-4 bg-transparent" />
            </div>
        </>
    );
}

export default Menu;

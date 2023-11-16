import AlbumListingItem from "./albumlistingitem";

export default function AlbumListing(props) {

    const { heading = "Listing Heading", listing = null } = props;

    if(!listing) {
        return <div>No items provided</div>
    }

    return(
        <section className="mb-12">
            <h2 className="text-3xl text-green-400 mb-4">{heading}</h2>
            <div className="grid grid-cols-5 gap-4">
                <AlbumListingItem />
            </div>
        </section>
    )
}
import TrackListingItem from "./tracklistingitem";

export default function TrackListing(props) {
    const { listing = null } = props;

    if(!listing) {
        return <div>No items provided</div>
    }

    return(
        <section className="mb-12">
            <h2 className="text-3xl text-green-400 mb-4">Played Tracks</h2>
            <div className="grid grid-cols-5 gap-4">
                
                {
                    listing.playlist.map((track, index) => {
                        return <TrackListingItem track={track.track} />
                    })
                }
            </div>
        </section>
    )
}
import { useState } from 'react';

function SearchableBagList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterBags(videos, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <BagList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}
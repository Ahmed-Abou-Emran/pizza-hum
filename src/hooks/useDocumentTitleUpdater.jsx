import { useEffect } from 'react';

function useDocumentTitleUpdater(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitleUpdater;

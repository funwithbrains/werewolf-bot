import React from 'react';

export default ({ isExpanded, children }) => <div>
  {isExpanded ? children : null}
</div>;

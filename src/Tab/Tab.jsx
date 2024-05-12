import React from 'react';

const Tab = () => {
    return (
        <div role="tablist" className="tabs tabs-lifted ">
  <a role="tab" className="tab font-semibold text-xl">Round Trio</a>
  <a role="tab" className="tab tab-active [--tab-bg:blue] [--tab-border-color:] text-white font-semibold text-xl">One Way</a>
  <a role="tab" className="tab font-semibold text-xl">Multi city</a>
</div>
    );
};

export default Tab;
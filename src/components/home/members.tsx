import classNames from "classnames";

import { tripBuddies } from "./home.constant";

function Members() {
  return (
    <div className="relative w-20 h-10 overflow-hidden">
      {tripBuddies.map((item, i) => (
        <img
          key={i}
          src={item.image}
          alt={`Member ${i + 1}`}
          className={classNames(
            "w-10 h-10 absolute object-cover rounded-full",
            `top-1/2 -translate-y-1/2`
          )}
          style={{
            zIndex: tripBuddies.length + i,
            left: `${i * 20}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Members;

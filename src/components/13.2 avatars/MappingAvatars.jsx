import React from "react";
import Avatar from "./Avatar";

function MappingAvatars({ avatarsArr, userInput }) {
  const filterAvatars = () => {
    return avatarsArr.filter((avatar) => {
      const fullName = (avatar.firstName + avatar.lastName).toLowerCase();
      return fullName.includes(userInput.toLowerCase());
    });
  };
  const insertAvatars = () => {
    const filteredAvatars = filterAvatars();
    return filteredAvatars.map((avatar) => (
      <Avatar
        key={avatar.id}
        imgUrl={avatar.img}
        firstName={avatar.firstName}
        lastName={avatar.lastName}
      />
    ));
  };
  return <>{insertAvatars()}</>;
}

export default MappingAvatars;

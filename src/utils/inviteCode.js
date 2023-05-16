export const setGroupInviteCode = (inviteCode) => {
  window.localStorage.setItem("groupInviteCode", inviteCode);
};

export const getGroupInviteCode = () => {
  return window.localStorage.getItem("groupInviteCode");
};

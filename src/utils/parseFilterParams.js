const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';

  if (!isString) return;
  const isContactType = (contactType) =>
    ['home', 'work', 'personal'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  typeof isFavourite === 'boolean';
  if (!isFavourite) return;

  return isFavourite;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};

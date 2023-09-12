import ShortUniqueId from "short-unique-id";

function uniqueId(length) {
  const uid = new ShortUniqueId({ length });
  return uid.randomUUID();
}

export default uniqueId;

function findEdgeById(id) {
  // Check if the string contains the pattern "reactflow__edge"
  const pattern = /reactflow__edge/i; // Use the "i" flag for case-insensitive matching
  return pattern.test(id);
}

export default findEdgeById;

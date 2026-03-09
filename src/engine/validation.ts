export function validateRack(rack: string): boolean {

  if (rack.length === 0) {
    return false;
  }

  if (rack.length > 7) {
    return false;
  }

  const validCharacters = /^[A-Z]+$/;

  return validCharacters.test(rack);

}
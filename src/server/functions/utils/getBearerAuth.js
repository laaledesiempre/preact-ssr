/**
 * Extraxts token from a Brearer string
 *
 * @param {bearerString} string - string with bearer syntax authentication.
 */
export const getBearerAuth = (bearerString) =>{
    return bearerString.split(' ')[1]
}
const groupByThreeChars = (value: string) => {
  return value.match(/\S{1,3}(?=(\S{3})*$)/g)
}

/**
 * Formats a phone number by grouping it by three characters.
 */
export const formatPhone = (phoneNumber?: string) => {
  if (phoneNumber === undefined) {
    return null
  }

  const groupedByThreeCharsArray = groupByThreeChars(phoneNumber)

  if (!groupedByThreeCharsArray || groupedByThreeCharsArray.length === 0) {
    return null
  }

  const firstGroup = groupedByThreeCharsArray[0]
  const hasMoreGroups = groupedByThreeCharsArray.length > 1

  if (firstGroup.length < 2 && hasMoreGroups) {
    // if the array has more than one group and the 1st group is small, join it with the second group (eg. + 420 -> +420)
    const secondGroup = groupedByThreeCharsArray[1]
    const combinedGroup = `${firstGroup}${secondGroup}`

    // remove the first two groups and add the combined one instead
    groupedByThreeCharsArray.shift()
    groupedByThreeCharsArray.shift()
    groupedByThreeCharsArray.unshift(combinedGroup)
  }

  // the space between groups is intentionally a non-breaking space
  return groupedByThreeCharsArray.join(' ')
}

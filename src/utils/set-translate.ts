export default (data: object) => {
  let attributes = ''
  if (Object.keys(data).length)
    Object.keys(data).map((key) => (attributes = `${attributes} ${data[key]} `))
  return { ...data, search_translation: attributes }
}

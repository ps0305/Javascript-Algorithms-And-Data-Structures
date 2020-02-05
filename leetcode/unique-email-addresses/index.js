/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const normalizedEmails = emails.map((email) => {
    const [local, domain] = email.split('@');
    const normalizedLocal = local.split('+')[0].replace(/\./g, '');
    return normalizedLocal + '@' + domain;
  });
  return new Set(normalizedEmails).size;
};

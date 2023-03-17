# Bugs/Issues

Notes:
- This branch is based off d2d8677de6a9b67c3c0808ff7c4163fea41fac83.  I see there have been
  updates since then, but unable to try with latest package versions since it' sunclear
  which version of @stackbit/cli to use.

1. Cannot create home page
   - STR
     1. Delete all page content from `/content/pages`
     2. Try to create a page from SB UI
     3. Enter / as the slug
   - ER: Page is created normally at `index.md`
   - AR: Page is not created with message "Encountered an error when trying to create a new Page"

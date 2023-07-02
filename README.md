# Filter Spam Tweet Extension

## Description
If a tweet contains at least two trending tags in its content, that tweet is hidden.

## Usage
1. Clone this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable developer mode.
4. Click `Load unpacked` and select the cloned directory.

## TODO
- [x] Hide tweets that contain at least two trending tags in its content
- [ ] Get words from the user as well as trending tags for filtering.
- [ ] Get trend words from [twitter.com/i/trends].
- [ ] Can something else be used instead of `observer`?
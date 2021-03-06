/**
 * Copyright (c) 2018-present, Leap DAO (leapdao.org)
 *
 * This source code is licensed under the Mozilla Public License Version 2.0
 * found in the LICENSE file in the root directory of this source tree.
 */

const addrCmp = require('./addrCmp');

module.exports = (slots, address) => {
  return slots
    .filter(s => s)
    .filter(slot => slot.newSigner && addrCmp(slot.newSigner, address));
};

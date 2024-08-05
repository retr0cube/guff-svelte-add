#!/usr/bin/env node

import { defineAdder } from "@svelte-add/core"
import { composer } from "./config/adder.js"
import { tests } from "./config/tests.js"

export default defineAdder(composer, tests)

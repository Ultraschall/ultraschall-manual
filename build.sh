#!/bin/bash

################################################################################
#
# Copyright (c) The Ultraschall Project (http://ultraschall.fm)
#
# The MIT License (MIT)
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
################################################################################

ULTRASCHALL_BUILD_FAILED=0

ULTRASCHALL_BUILD_DIRECTORY="./build"
ULTRASCHALL_SCRIPTS_DIRECTORY="./scripts"
ULTRASCHALL_DOCS_DIRECTORY="./docs"

ULTRASCHALL_BUILD_OUTPUT="html"

ULTRASCHALL_BUILD_BOOTSTRAP=0
ULTRASCHALL_BUILD_CLEAN=0

for arg in "$@"
do
case $arg in
    -b|--bootstrap)
    ULTRASCHALL_BUILD_BOOTSTRAP=1
    shift # past argument
    ;;
    -c|--clean)
    ULTRASCHALL_BUILD_CLEAN=1
    shift # past argument
    ;;
    -h|--help)
    echo "Usage: build.sh [Options]"
    echo ""
    echo "Options:"
    echo "  -b|--bootstrap  Reinitialize build targets"
    echo "  -c|--clean      Delete intermediate build targets"
    echo "  -h|--help       Print this help screen"
    echo "  -o|--output     Select output format (default = $ULTRASCHALL_BUILD_OUTPUT)"
    echo ""
    exit 0
    shift # past argument
    ;;
    *)    # unknown option
    echo "Unknown option $arg"
    exit 1
    shift # past argument
    ;;
esac
done

echo "**********************************************************************"
echo "*                                                                    *"
echo "*                       ULTRASCHALL MANUAL                           *"
echo "*                                                                    *"
echo "**********************************************************************"
echo ""

if [ $ULTRASCHALL_BUILD_CLEAN -ne 0 ]; then
  echo "Cleaning Ultraschall manual files..."
  rm -rf $ULTRASCHALL_BUILD_DIRECTORY
  echo "Done."
fi

if [ ! -d $ULTRASCHALL_BUILD_DIRECTORY ]; then
  mkdir -p $ULTRASCHALL_BUILD_DIRECTORY
fi

if [ $ULTRASCHALL_BUILD_FAILED -eq 0 ]; then
  echo "Building Ultraschall manual files..."
  pandoc --from=markdown --to=$ULTRASCHALL_BUILD_OUTPUT --standalone --self-contained --quiet --css=$ULTRASCHALL_SCRIPTS_DIRECTORY/ultraschall.css --output=$ULTRASCHALL_BUILD_DIRECTORY/ultraschall-manual.html $ULTRASCHALL_DOCS_DIRECTORY/outline.md
  if [ $? -ne 0 ]; then
    ULTRASCHALL_BUILD_FAILED=1
  fi
  echo "Done."
fi

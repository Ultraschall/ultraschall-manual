#!/usr/bin/python

import sys
import deepl
import os
import shutil
from dotenv import load_dotenv
load_dotenv()

import sys, getopt


# Create a Translator object providing your DeepL API authentication key.
# To avoid writing your key in source code, you can set it in an environment
# variable DEEPL_AUTH_KEY, then read the variable in your Python code:
translator = deepl.Translator(os.environ['DEEPL_AUTH_KEY'])


'''
translate the given md file to en
'''
def translateFile(filename):


    # Glossaries allow you to customize your translations
   glossary_de_to_en = translator.create_glossary(
       "US_glossary",
       source_lang="DE",
       target_lang="EN-GB",
       entries={"Ultraschall": "Ultraschall", "ultraschall": "ultraschall"},
   )
   translatedFilename = str(translator.translate_text(filename,
                                                      source_lang="DE",
                                                      target_lang="EN-GB",
                                                      glossary=glossary_de_to_en))

   # convert file to txt
   shutil.copy2("../docs/de/"+filename + '.md', "../docs/de/"+filename+'.txt')

    # Translate a formal document from English to German
   try:
       translator.translate_document_from_filepath(
           "../docs/de/"+filename+".txt",
           "../i18n/en/docusaurus-plugin-content-docs/current"+translatedFilename+".txt",
           source_lang="DE",
           target_lang="EN-GB",
           glossary=glossary_de_to_en
       )

   except deepl.DocumentTranslationException as error:
       # If an error occurs during translate_document_from_filepath() or
       # translate_document() and after the document was already uploaded, a
       # DocumentTranslationException is raised. The document_handle property
       # contains the document handle to later retrieve the document or contact
       # DeepL support.
       doc_id = error.document_handle.id
       doc_key = error.document_handle.key
       print(f"Error after uploading document ${error}, id: ${doc_id} key: ${doc_key}")
   except deepl.DeepLException as error:
        # Errors during upload raise a DeepLException
        print(error)


   shutil.copy2("../docs/en/"+translatedFilename+".txt", "..../i18n/en/docusaurus-plugin-content-docs/current"+translatedFilename+".md")
   # delte txt file
   os.remove("../docs/de/"+ filename + ".txt")
   os.remove("../i18n/en/docusaurus-plugin-content-docs/current"+ translatedFilename + ".txt")

'''
with_glossary = translator.translate_text_with_glossary(
    "The artist was awarded a prize.", glossary_en_to_de
)
print(with_glossary)  # "Der Maler wurde mit einem Gewinn ausgezeichnet."

without_glossary = translator.translate_text(
    "The artist was awarded a prize.", target_lang="DE"
)
print(without_glossary)  # "Der Künstler wurde mit einem Preis ausgezeichnet."
'''

"""
prints how much chars are left
"""
def printUsage():
    # Check account usage
    usage = translator.get_usage()
    if usage.character.limit_exceeded:
        print("Character limit exceeded.")
    else:
        print(f"character usage: {usage.character.count} of {usage.character.limit}")


def main(argv):
   inputfile = ''
   try:
      opts, args = getopt.getopt(argv,"hi:o:",["ifile="])
   except getopt.GetoptError:
      print ('main.py -i <inputfile>')
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print('main.py -i <inputfile>')
         sys.exit()
      elif opt in ("-i", "--ifile"):
         inputfile = arg
   print ('Input file is "', inputfile)

   # translate file
   translateFile(inputfile)
   # print how mush chars are left
   printUsage()


if __name__ == "__main__":
   main(sys.argv[1:])

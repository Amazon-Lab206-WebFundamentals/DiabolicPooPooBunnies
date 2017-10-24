# Write a program that takes a list and prints a message for each element in the list, based on that element's data type.
# input: always a list. string : concat. number= sum
# print string, number, type
# what does it contain

"""#type==
if type == string
print "string
print concat

if type == number
print number
print sum

If both == &&,
then "mixed'
print number concat
print sum

"""
ml = ["grumbly", "pink", 14, 429, "rabbit"]
il = [2, 3, 1, 7]
sl = ['magical', 'unicorns']


testlist = sum = 0
phrase = ""
listtype = None

for val in il:
    if(type(val)is int):
        sum += val
        if(listtype is str):
            listtype = "mixed"
        elif(listtype is None):
            listtype = "integer"
    else:
        phrase += val
        if (listtype is int):
            listtype = "mixed"
        elif (listtype is None):
            listtype = "string"

print "The list you entered is of {} type".format(listtype)

if (listtype is int or listtype is "mixed"):
    print "Sum: {}".format(sum)
if (listtype is "string" or listype is "mixed"):
    print "String: {}".format(phrase)

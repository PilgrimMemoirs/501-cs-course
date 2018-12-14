def asterisks(num)
  '*' * num
end

# puts asterisks(5)


def upsidedown_pyramid(num)
  while (num > 0)
    puts asterisks(num)
    num -= 1
    pyramid(num)
  end
end

pyramid(5)
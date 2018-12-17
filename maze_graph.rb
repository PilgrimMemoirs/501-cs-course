

def find_end(key, visited = {})
  finish = 44
  return puts "exit is at #{key}" if key == finish
  visited[key] = true
  maze[key].each { |k| find_end(k, visited) if !visited[k] }
end


# Adjacency List
maze = {
  5 => [12],
  9 => [10, 16],
  10 => [9, 11],
  11 => [10, 12],
  12 => [5, 11],
  16 => [9, 23],
  23 => [16, 24],
  24 => [23, 25],
  25 => [24, 26, 32],
  26 => [25, 27],
  27 => [26, 34],
  32 => [25, 39],
  34 => [27],
  37 => [38, 44],
  38 => [37, 39],
  39 => [32, 38],
  44 => [37, 51]
}

find_end(5)


# benchmark this
# could be log(n) if instead of link lists, use binary search tree
# 5-year gaps, starting at 20-24, ending at 85-89 and 90+
# stats = [336531,354021,366111,351725,315716,330697,345770,377943,354060,305446,246972,166322,110843,71831,46648] # all of bc
stats =     [83956,103969,104423, 89466, 77422, 81818, 84042, 85757, 76741, 65747, 52276, 35414, 25075, 17143, 11577] # VCH
agegroups = [20-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50-54, 55-59, 60-64, 65-69, 70-74, 75-79, 80-84, 85-89, "90+"]

# phase 1 was covid ward healthcare workers and LTC facilities
# phase 2 is 80+
# phase 3 is 64:79 in 5 year increments
# phase 4 is 25:59 in 5 year increments, then 18:24
# note: indigenous people have a 15-year advantage over general population, i.e. a 40yr old could get vaccinated in the 55-59 age group
# uses data from 2019, assumes zero population change or demographic shift as no newer statistics are available
# indigenous people are 6% of BC's population
# assumes indigenous demographics are the same as general population; this is most likely false but simplifying
# assumes single dose per person
# assumes 100% vaccination in demographic sections
# extrapolates from 7 day rolling average


# already known dates: 
# 90+ march 15 vaccination starts
# 85+ march 22 
# 80+ march 29

import json
from statistics import mean

phase = {
    '< march 15': 'healthcare workers',
    '> march 22': '90+ done',
    '> march 29': '85+ done',
}

# with open("BC.json") as f:
#     bcstats = json.load(f)['data'][-7:]
    
# avg_daily_delta_vaccines = int(mean([i['change_vaccinations'] for i in bcstats]))
# current_total = bcstats[-1]['total_vaccinations']

# double_dippers = bcstats[-1]['total_vaccinated']

total_eligible_population = sum(stats)

total_vaccinated_atleast_once = 403960
# total_vaccinated_atleast_once = current_total - double_dippers
remaining_population = total_eligible_population-total_vaccinated_atleast_once

percent_unvaccinated = remaining_population/total_eligible_population

# healthcare_workers = total_vaccinated_atleast_once # - stats[-1] # uncomment on march 22

current_state = '90+'
percent_under90 = sum(stats[:-1])/total_eligible_population

finished = sum(stats[-9:])*0.9

# print(avg_daily_delta_vaccines)
